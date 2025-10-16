import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { SettingsForm } from "@/components/dashboard/SettingsForm";

export default function SettingsPage() {
  return (
    <div>
      <DashboardNavbar title="Settings" />

      <div className="p-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Account Settings
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your account preferences and security
            </p>
          </div>

          <SettingsForm />
        </div>
      </div>
    </div>
  );
}
