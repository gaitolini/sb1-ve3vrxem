/*
  # Criação das tabelas para o Diário Oficial

  1. Novas Tabelas
    - `publications`
      - `id` (uuid, chave primária)
      - `title` (texto, título da publicação)
      - `content` (texto, conteúdo da publicação)
      - `publication_number` (texto, número único da publicação)
      - `publication_date` (data, data de publicação)
      - `status` (enum, status da publicação)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `user_id` (uuid, referência ao usuário que criou)

  2. Segurança
    - RLS habilitado na tabela publications
    - Políticas para leitura pública
    - Políticas para escrita apenas por usuários autenticados
*/

-- Criar enum para status
CREATE TYPE publication_status AS ENUM ('draft', 'scheduled', 'published');

-- Criar tabela de publicações
CREATE TABLE IF NOT EXISTS publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  publication_number text NOT NULL UNIQUE,
  publication_date date NOT NULL,
  status publication_status NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

-- Habilitar RLS
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública de publicações aprovadas
CREATE POLICY "Publicações públicas são visíveis para todos" ON publications
  FOR SELECT
  USING (status = 'published');

-- Política para usuários autenticados gerenciarem suas publicações
CREATE POLICY "Usuários podem gerenciar suas próprias publicações" ON publications
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);