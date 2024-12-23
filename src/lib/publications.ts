import { supabase } from './supabase';
import type { Publication } from '../types/Publication';

export async function getPublications() {
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .order('publication_date', { ascending: false });

  if (error) throw error;
  return data;
}

export async function createPublication(publication: Omit<Publication, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('publications')
    .insert(publication)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updatePublication(id: string, publication: Partial<Publication>) {
  const { data, error } = await supabase
    .from('publications')
    .update(publication)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getPublicationsByDate(date: Date) {
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .eq('publication_date', date.toISOString().split('T')[0])
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}