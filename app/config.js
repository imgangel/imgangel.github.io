/* =====================================================================
   Future Pilots Exam Prep — deployment configuration
   Fill in the two values from your Supabase project, then deploy this
   file alongside index.html. Nothing else in the app needs changing.

   Where to find them (Supabase dashboard):
     Project Settings → API
       • Project URL        → SUPABASE_URL
       • anon / public key  → SUPABASE_ANON_KEY

   The anon key is designed to be public: all real protection comes
   from the Row Level Security policies in supabase-schema.sql.
   Never put the service_role key here.

   Until both values are replaced, the sign-in gate stays locked and
   shows "Sign-in is not available yet" — it never opens by accident.
   ===================================================================== */
window.FAK_CONFIG = {
  SUPABASE_URL: "https://kfutrpuayktrbysnzaum.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmdXRycHVheWt0cmJ5c256YXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0MDMwNTEsImV4cCI6MjEwODk3OTA1MX0.GLk9Ab0JiREW-dLUBFk9m1F4n5_W8Y_HA8VpC0rZyFA"
};
