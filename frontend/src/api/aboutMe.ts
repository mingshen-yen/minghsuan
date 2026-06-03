import { supabase } from "../lib/supabase";
import type { AboutData } from "../lib/type";

export async function getAbout(): Promise<AboutData> {
  const [
    { data: aboutMe, error: e1 },
    { data: experience, error: e2 },
    { data: education, error: e3 },
    { data: skills, error: e4 },
  ] = await Promise.all([
    supabase.from("aboutMe").select("*"),
    supabase.from("experience").select("*").order("id", { ascending: true }),
    supabase.from("education").select("*").order("id", { ascending: true }),
    supabase.from("skills").select("*").order("id", { ascending: true }),
  ]);

  const error = e1 ?? e2 ?? e3 ?? e4;
  if (error) throw error;

  return {
    aboutMe: (aboutMe as any[])?.[0] as AboutData["aboutMe"],
    experience: (experience ?? []) as AboutData["experience"],
    education: (education ?? []) as AboutData["education"],
    skills: (skills ?? []) as AboutData["skills"],
    experItems: [],
  };
}
