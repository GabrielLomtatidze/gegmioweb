import AppSidebar from "@/layout/AppSidebar";
import type { FunctionComponent } from "react"

const PrivacyPolicy: FunctionComponent = () => {
  return (
    <div>
        <AppSidebar />
        <div className="w-full bg-[#0F0F0F] flex justify-center m-auto py-[70px]">
          <div className="max-w-7xl w-full m-auto p-4 md:px-[100px]">

            <div>
              <h1 className="text-[32px] text-white font-bold">Gegmio Privacy Policy </h1>
              <p className="text-white mt-2.5">Company: Gegmio, LLC (შპს Gegmio)<br />
                Address: Tbilisi, Georgia<br />Email: info@gegmio.com<br />Website: <a href="https://gegmio.com"
                  className="bg-linear-to-r from-[#FF3033] to-[#EF7800] bg-clip-text text-transparent">https://gegmio.com</a></p>
            </div>

            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">1. Introduction</h1>
              <p className="text-white mt-2.5">
                Welcome to Gegmio — the all-in-one booking ecosystem connecting customers and businesses. This Privacy Policy explains how we collect, use, and protect your personal information when you use the Gegmio mobile app or web platform (CRM). By using Gegmio, you agree to this Privacy Policy.
              </p>
            </div>

            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">2. Information We Collect</h1>
              <p className="text-white mt-2.5">
                We collect and store the following information:
              </p>
              <ul className="text-white list-disc list-inside mt-[5px]">
                <li>Personal details: name, phone number, and/or email address (used for account creation and login).</li>
                <li>Location data: used only to show nearby businesses.</li>
                <li>Booking details: selected service, business name, date, and time.</li>
                <li>Device data: basic information such as device model and operating system (for technical performance only).</li>
              </ul>
              <p className="text-white mt-[5px]">
                We do not collect or store payment data, tracking cookies, or analytics.
              </p>
            </div>

            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">3. How We Use Your Information</h1>
              <p className="text-white mt-2.5">
                We use your data to:
              </p>
              <ul className="text-white list-disc list-inside mt-[5px]">
                <li>Manage and confirm your bookings.</li>
                <li>Send booking reminders and notifications.</li>
                <li>Show nearby facilities based on your location.</li>
                <li>Improve the app experience and customer support.</li>
              </ul>
            </div>


            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">4. Sharing of Data</h1>
              <p className="text-white mt-2.5">
                We only share the minimum data required to confirm bookings:
              </p>
              <ul className="text-white list-disc list-inside mt-[5px]">
                <li>Your name, selected service, and appointment time are shared only with the business you booked with. We do not sell, rent, or share data with third parties for advertising or marketing.</li>
              </ul>
            </div>


            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">5. Push Notification</h1>
              <p className="text-white mt-2.5">
                We send push notifications for:
              </p>
              <ul className="text-white list-disc list-inside mt-[5px]">
                <li>Booking confirmations</li>
                <li>Reminders before visits</li>
                <li>Updates or important information related to your booking</li>
              </ul>
              <p className="text-white mt-[5px]">
                We do not collect or store payment data, tracking cookies, or analytics.
              </p>
            </div>


            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">6. Data Detention</h1>
              <p className="text-white mt-2.5">
                We store your booking data as long as your account is active.When you delete your account, all related data will be permanently removed.
              </p>
            </div>

            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">7. Data Security</h1>
              <p className="text-white mt-2.5">
                Your information is securely stored and protected from unauthorized access. <br />Access is limited only to authorized Gegmio staff.
              </p>
            </div>


            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">8. Your Rights</h1>
              <p className="text-white mt-2.5">
                You can:
              </p>
              <ul className="text-white list-disc list-inside mt-[5px]">
                <li>Access, edit, or delete your account anytime.</li>
                <li>Request account deletion by contacting us at info@gegmio.com.</li>
                <li>Control location access from your device settings.</li>
              </ul>
            </div>


            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">9. Changes to This Policy</h1>
              <p className="text-white mt-2.5">
                We may update this Privacy Policy periodically. <br />All changes will be posted on https://gegmio.com/privacy-policy.
              </p>
            </div>

            <div className="mt-[30px]">
              <h1 className="text-[32px] text-white font-bold">10. Contact</h1>
              <p className="text-white mt-2.5">
                For any questions about this policy, please contact: <br />📩 info@gegmio.com
              </p>
            </div>

          </div>
        </div>
    </div>

  );
};

export default PrivacyPolicy;
