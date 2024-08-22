import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the sign-in page
  redirect('/sign-in');
}