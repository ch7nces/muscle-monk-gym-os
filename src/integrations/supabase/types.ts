export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      attendance: {
        Row: {
          checked_in_at: string
          checked_out_at: string | null
          created_at: string
          gym_id: string
          id: string
          member_id: string
          method: Database["public"]["Enums"]["checkin_method"]
          reason: string | null
          recorded_by: string | null
        }
        Insert: {
          checked_in_at?: string
          checked_out_at?: string | null
          created_at?: string
          gym_id: string
          id?: string
          member_id: string
          method: Database["public"]["Enums"]["checkin_method"]
          reason?: string | null
          recorded_by?: string | null
        }
        Update: {
          checked_in_at?: string
          checked_out_at?: string | null
          created_at?: string
          gym_id?: string
          id?: string
          member_id?: string
          method?: Database["public"]["Enums"]["checkin_method"]
          reason?: string | null
          recorded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attendance_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance_checkin_tokens: {
        Row: {
          created_at: string
          expires_at: string
          gym_id: string
          member_id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string
          expires_at: string
          gym_id: string
          member_id: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string
          expires_at?: string
          gym_id?: string
          member_id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attendance_checkin_tokens_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_checkin_tokens_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance_qr_challenges: {
        Row: {
          created_at: string
          created_by: string | null
          expires_at: string
          gym_id: string
          nonce: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          expires_at: string
          gym_id: string
          nonce: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          expires_at?: string
          gym_id?: string
          nonce?: string
        }
        Relationships: [
          {
            foreignKeyName: "attendance_qr_challenges_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          actor_id: string | null
          created_at: string
          details: Json
          entity: string | null
          entity_id: string | null
          gym_id: string | null
          id: string
        }
        Insert: {
          action: string
          actor_id?: string | null
          created_at?: string
          details?: Json
          entity?: string | null
          entity_id?: string | null
          gym_id?: string | null
          id?: string
        }
        Update: {
          action?: string
          actor_id?: string | null
          created_at?: string
          details?: Json
          entity?: string | null
          entity_id?: string | null
          gym_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          created_at: string
          full_name: string
          gym_id: string
          handled: boolean
          id: string
          message: string
          phone: string
        }
        Insert: {
          created_at?: string
          full_name: string
          gym_id: string
          handled?: boolean
          id?: string
          message: string
          phone: string
        }
        Update: {
          created_at?: string
          full_name?: string
          gym_id?: string
          handled?: boolean
          id?: string
          message?: string
          phone?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_messages_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      expenses: {
        Row: {
          amount: number
          category: string
          created_at: string
          description: string | null
          gym_id: string
          id: string
          is_recurring: boolean
          recorded_by: string | null
          spent_on: string
          voided_at: string | null
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          description?: string | null
          gym_id: string
          id?: string
          is_recurring?: boolean
          recorded_by?: string | null
          spent_on?: string
          voided_at?: string | null
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          description?: string | null
          gym_id?: string
          id?: string
          is_recurring?: boolean
          recorded_by?: string | null
          spent_on?: string
          voided_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      facilities: {
        Row: {
          created_at: string
          description: string | null
          gym_id: string
          id: string
          image_url: string | null
          is_published: boolean
          name: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          gym_id: string
          id?: string
          image_url?: string | null
          is_published?: boolean
          name: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          gym_id?: string
          id?: string
          image_url?: string | null
          is_published?: boolean
          name?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "facilities_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer: string
          created_at: string
          gym_id: string
          id: string
          is_published: boolean
          question: string
          sort_order: number
        }
        Insert: {
          answer: string
          created_at?: string
          gym_id: string
          id?: string
          is_published?: boolean
          question: string
          sort_order?: number
        }
        Update: {
          answer?: string
          created_at?: string
          gym_id?: string
          id?: string
          is_published?: boolean
          question?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "faqs_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      gym_settings: {
        Row: {
          about_text: string | null
          checkin_cooldown_minutes: number
          entrance_qr_ttl_seconds: number
          expiring_soon_days: number
          google_rating: number | null
          google_review_count: number | null
          gym_id: string
          hero_subtitle: string | null
          hours: Json
          inactive_days: number
          tax_enabled: boolean
          tax_label: string | null
          tax_rate: number
          trial_slot_capacity: number
          trial_slots: Json
          updated_at: string
        }
        Insert: {
          about_text?: string | null
          checkin_cooldown_minutes?: number
          entrance_qr_ttl_seconds?: number
          expiring_soon_days?: number
          google_rating?: number | null
          google_review_count?: number | null
          gym_id: string
          hero_subtitle?: string | null
          hours?: Json
          inactive_days?: number
          tax_enabled?: boolean
          tax_label?: string | null
          tax_rate?: number
          trial_slot_capacity?: number
          trial_slots?: Json
          updated_at?: string
        }
        Update: {
          about_text?: string | null
          checkin_cooldown_minutes?: number
          entrance_qr_ttl_seconds?: number
          expiring_soon_days?: number
          google_rating?: number | null
          google_review_count?: number | null
          gym_id?: string
          hero_subtitle?: string | null
          hours?: Json
          inactive_days?: number
          tax_enabled?: boolean
          tax_label?: string | null
          tax_rate?: number
          trial_slot_capacity?: number
          trial_slots?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gym_settings_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: true
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      gyms: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string | null
          id: string
          latitude: number | null
          longitude: number | null
          name: string
          name_hi: string | null
          phone: string | null
          postal_code: string | null
          slug: string
          state: string | null
          timezone: string
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name: string
          name_hi?: string | null
          phone?: string | null
          postal_code?: string | null
          slug: string
          state?: string | null
          timezone?: string
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name?: string
          name_hi?: string | null
          phone?: string | null
          postal_code?: string | null
          slug?: string
          state?: string | null
          timezone?: string
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          assigned_to: string | null
          consent_to_contact: boolean
          converted_member_id: string | null
          created_at: string
          email: string | null
          fitness_goal: string | null
          full_name: string
          gym_id: string
          id: string
          lost_reason: string | null
          next_followup_at: string | null
          notes: string | null
          phone: string
          source: Database["public"]["Enums"]["lead_source"]
          stage: Database["public"]["Enums"]["lead_stage"]
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          consent_to_contact?: boolean
          converted_member_id?: string | null
          created_at?: string
          email?: string | null
          fitness_goal?: string | null
          full_name: string
          gym_id: string
          id?: string
          lost_reason?: string | null
          next_followup_at?: string | null
          notes?: string | null
          phone: string
          source?: Database["public"]["Enums"]["lead_source"]
          stage?: Database["public"]["Enums"]["lead_stage"]
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          consent_to_contact?: boolean
          converted_member_id?: string | null
          created_at?: string
          email?: string | null
          fitness_goal?: string | null
          full_name?: string
          gym_id?: string
          id?: string
          lost_reason?: string | null
          next_followup_at?: string | null
          notes?: string | null
          phone?: string
          source?: Database["public"]["Enums"]["lead_source"]
          stage?: Database["public"]["Enums"]["lead_stage"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_converted_member_id_fkey"
            columns: ["converted_member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      members: {
        Row: {
          archived_at: string | null
          assigned_trainer_id: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          emergency_contact: string | null
          full_name: string
          gym_id: string
          id: string
          joined_on: string
          marketing_consent: boolean
          member_code: string
          notes: string | null
          phone: string
          photo_url: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          archived_at?: string | null
          assigned_trainer_id?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          full_name: string
          gym_id: string
          id?: string
          joined_on?: string
          marketing_consent?: boolean
          member_code: string
          notes?: string | null
          phone: string
          photo_url?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          archived_at?: string | null
          assigned_trainer_id?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          full_name?: string
          gym_id?: string
          id?: string
          joined_on?: string
          marketing_consent?: boolean
          member_code?: string
          notes?: string | null
          phone?: string
          photo_url?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "members_assigned_trainer_id_fkey"
            columns: ["assigned_trainer_id"]
            isOneToOne: false
            referencedRelation: "trainers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "members_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      membership_plans: {
        Row: {
          archived_at: string | null
          category: string
          created_at: string
          discount_label: string | null
          duration_days: number
          features: string[]
          gym_id: string
          id: string
          is_published: boolean
          is_recommended: boolean
          joining_fee: number
          name: string
          price: number
          sort_order: number
          updated_at: string
        }
        Insert: {
          archived_at?: string | null
          category?: string
          created_at?: string
          discount_label?: string | null
          duration_days: number
          features?: string[]
          gym_id: string
          id?: string
          is_published?: boolean
          is_recommended?: boolean
          joining_fee?: number
          name: string
          price: number
          sort_order?: number
          updated_at?: string
        }
        Update: {
          archived_at?: string | null
          category?: string
          created_at?: string
          discount_label?: string | null
          duration_days?: number
          features?: string[]
          gym_id?: string
          id?: string
          is_published?: boolean
          is_recommended?: boolean
          joining_fee?: number
          name?: string
          price?: number
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "membership_plans_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      memberships: {
        Row: {
          amount_due: number | null
          created_at: string
          created_by: string | null
          discount: number
          end_date: string
          gym_id: string
          id: string
          joining_fee: number
          member_id: string
          plan_id: string | null
          plan_name: string
          price: number
          start_date: string
          state: string
        }
        Insert: {
          amount_due?: number | null
          created_at?: string
          created_by?: string | null
          discount?: number
          end_date: string
          gym_id: string
          id?: string
          joining_fee?: number
          member_id: string
          plan_id?: string | null
          plan_name: string
          price?: number
          start_date: string
          state?: string
        }
        Update: {
          amount_due?: number | null
          created_at?: string
          created_by?: string | null
          discount?: number
          end_date?: string
          gym_id?: string
          id?: string
          joining_fee?: number
          member_id?: string
          plan_id?: string | null
          plan_name?: string
          price?: number
          start_date?: string
          state?: string
        }
        Relationships: [
          {
            foreignKeyName: "memberships_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "memberships_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "memberships_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "membership_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          gym_id: string
          id: string
          kind: string
          member_id: string
          membership_id: string | null
          method: Database["public"]["Enums"]["payment_method"]
          notes: string | null
          paid_at: string
          recorded_by: string | null
          reference: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          gym_id: string
          id?: string
          kind?: string
          member_id: string
          membership_id?: string | null
          method: Database["public"]["Enums"]["payment_method"]
          notes?: string | null
          paid_at?: string
          recorded_by?: string | null
          reference?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          gym_id?: string
          id?: string
          kind?: string
          member_id?: string
          membership_id?: string | null
          method?: Database["public"]["Enums"]["payment_method"]
          notes?: string | null
          paid_at?: string
          recorded_by?: string | null
          reference?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_membership_id_fkey"
            columns: ["membership_id"]
            isOneToOne: false
            referencedRelation: "memberships"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author_name: string
          consent_confirmed: boolean
          created_at: string
          gym_id: string
          id: string
          is_published: boolean
          quote: string
          rating: number | null
          source: string | null
        }
        Insert: {
          author_name: string
          consent_confirmed?: boolean
          created_at?: string
          gym_id: string
          id?: string
          is_published?: boolean
          quote: string
          rating?: number | null
          source?: string | null
        }
        Update: {
          author_name?: string
          consent_confirmed?: boolean
          created_at?: string
          gym_id?: string
          id?: string
          is_published?: boolean
          quote?: string
          rating?: number | null
          source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "testimonials_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      trainers: {
        Row: {
          created_at: string
          experience_years: number | null
          full_name: string
          gym_id: string
          id: string
          is_active: boolean
          is_published: boolean
          photo_url: string | null
          qualifications: string | null
          services: string[]
          specialization: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          experience_years?: number | null
          full_name: string
          gym_id: string
          id?: string
          is_active?: boolean
          is_published?: boolean
          photo_url?: string | null
          qualifications?: string | null
          services?: string[]
          specialization?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          experience_years?: number | null
          full_name?: string
          gym_id?: string
          id?: string
          is_active?: boolean
          is_published?: boolean
          photo_url?: string | null
          qualifications?: string | null
          services?: string[]
          specialization?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trainers_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
      trial_bookings: {
        Row: {
          created_at: string
          email: string | null
          fitness_goal: string | null
          full_name: string
          gym_id: string
          id: string
          lead_id: string | null
          phone: string
          preferred_date: string
          status: string
          time_slot: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          fitness_goal?: string | null
          full_name: string
          gym_id: string
          id?: string
          lead_id?: string | null
          phone: string
          preferred_date: string
          status?: string
          time_slot: string
        }
        Update: {
          created_at?: string
          email?: string | null
          fitness_goal?: string | null
          full_name?: string
          gym_id?: string
          id?: string
          lead_id?: string | null
          phone?: string
          preferred_date?: string
          status?: string
          time_slot?: string
        }
        Relationships: [
          {
            foreignKeyName: "trial_bookings_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trial_bookings_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          gym_id: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          gym_id?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          gym_id?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_gym_id_fkey"
            columns: ["gym_id"]
            isOneToOne: false
            referencedRelation: "gyms"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      _do_checkin: {
        Args: {
          _at: string
          _gym: string
          _member: string
          _method: Database["public"]["Enums"]["checkin_method"]
          _reason: string
        }
        Returns: Json
      }
      claim_gym_ownership: { Args: { _slug: string }; Returns: boolean }
      gym_has_owner: { Args: { _slug: string }; Returns: boolean }
      has_gym_role: {
        Args: {
          _gym: string
          _roles: Database["public"]["Enums"]["app_role"][]
        }
        Returns: boolean
      }
      is_front_desk: { Args: { _gym: string }; Returns: boolean }
      is_gym_admin: { Args: { _gym: string }; Returns: boolean }
      is_gym_staff: { Args: { _gym: string }; Returns: boolean }
      issue_entrance_challenge: { Args: { _gym: string }; Returns: Json }
      issue_member_checkin_token: { Args: never; Returns: Json }
      link_member_account: { Args: never; Returns: boolean }
      log_audit: {
        Args: {
          _action: string
          _details: Json
          _entity: string
          _entity_id: string
          _gym: string
        }
        Returns: undefined
      }
      manual_checkin: {
        Args: { _at: string; _gym: string; _member: string; _reason: string }
        Returns: Json
      }
      member_entrance_checkin: { Args: { _payload: string }; Returns: Json }
      member_status: { Args: { _member: string }; Returns: string }
      redeem_member_token: {
        Args: { _gym: string; _token: string }
        Returns: Json
      }
    }
    Enums: {
      app_role:
        | "super_admin"
        | "owner"
        | "manager"
        | "receptionist"
        | "trainer"
        | "member"
      checkin_method: "reception_scan" | "entrance_qr" | "manual"
      lead_source:
        | "website"
        | "google_search"
        | "google_maps"
        | "instagram"
        | "facebook"
        | "whatsapp"
        | "walk_in"
        | "referral"
        | "other"
      lead_stage:
        | "new"
        | "contacted"
        | "trial_scheduled"
        | "trial_completed"
        | "follow_up"
        | "converted"
        | "lost"
      payment_method: "cash" | "upi" | "bank_transfer" | "online" | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "super_admin",
        "owner",
        "manager",
        "receptionist",
        "trainer",
        "member",
      ],
      checkin_method: ["reception_scan", "entrance_qr", "manual"],
      lead_source: [
        "website",
        "google_search",
        "google_maps",
        "instagram",
        "facebook",
        "whatsapp",
        "walk_in",
        "referral",
        "other",
      ],
      lead_stage: [
        "new",
        "contacted",
        "trial_scheduled",
        "trial_completed",
        "follow_up",
        "converted",
        "lost",
      ],
      payment_method: ["cash", "upi", "bank_transfer", "online", "other"],
    },
  },
} as const
