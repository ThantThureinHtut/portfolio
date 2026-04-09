import { createPublicClient } from "@/lib/supabase/public";

export async function getProjects() {
  const supabase = createPublicClient();
  const { data, error } = await supabase.from("projects").select();
  if (error) {
    throw new Error("This is error", error);
  }
  return data;
}

export async function getCertificates() {
  const supabase = createPublicClient();
  const { data, error } = await supabase.from("certificates").select();
  if (error) {
    throw new Error("This is certificates error", error);
  }
  return data;
}