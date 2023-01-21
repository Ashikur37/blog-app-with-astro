import { createClient } from "@supabase/supabase-js";

const supabaseUrl ="https://ttxkmdyyxhnjfemqfbcp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0eGttZHl5eGhuamZlbXFmYmNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3MDA5MzAsImV4cCI6MTk4OTI3NjkzMH0.FLIqg7Sity2HURfjJkOGhGAylaoYUU3VGuU3wOVNdyk";

export const supabase = createClient(supabaseUrl!, supabaseKey!);