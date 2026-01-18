export interface LoginDto { email: string; password: string; }
export interface RegisterDto { email: string; password: string; fullName: string; phone?: string; address?: string; }
export interface AuthResponse { accessToken: string; refreshToken: string; }
export interface UserProfile { id: number; email: string; fullName: string; role: string; }
