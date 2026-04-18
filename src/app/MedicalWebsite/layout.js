export const metadata = {
  title: "Social Media Project | ML Portfolio",
  description: "A detailed look at the Social Media application built with Django, PostgreSQL, and Three.js.",
};

export default function SocialMediaLayout({ children }) {
  return (
    <>
      {/* You can add a sub-navigation or a back button here if needed */}
      <main>{children}</main>
    </>
    
  );
}