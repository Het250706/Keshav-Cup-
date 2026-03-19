'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';
import { useAuth } from './AuthProvider';

interface RoleGuardProps {
    children: React.ReactNode;
    allowedRole: 'admin' | 'captain';
}

export default function RoleGuard({ children, allowedRole }: RoleGuardProps) {
    return <>{children}</>;
}