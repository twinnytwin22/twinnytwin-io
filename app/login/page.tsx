import AuthComponent from "@/ui/Auth/AuthComponent/AuthComponent";
import { getSiteSettings } from "@/utils/db";

async function page() {
  const settings = await getSiteSettings();

  return (
    <div className="h-screen items-center flex w-full bg-black">
      <AuthComponent settings={settings} />
    </div>
  );
}

export default page;
