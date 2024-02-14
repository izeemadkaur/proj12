"use client";
import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    if(path) router.push(path);
  };

  return navigate;
};