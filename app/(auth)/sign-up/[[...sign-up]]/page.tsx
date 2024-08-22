import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-indigo-500 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary:
              "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            },
          }}
        />
        <p className="text-center text-gray-950 mt-6">
          Already have an account?{" "}
          <a href="/sign-in" className="text-white hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
