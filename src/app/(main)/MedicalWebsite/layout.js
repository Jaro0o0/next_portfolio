export const metadata = {
  title: "Medical Website | ML Portfolio",
  description: "A detailed look at the Social Media application built with Django, PostgreSQL, and Three.js.",
};

export default function SocialMediaLayout({ children }) {
  return (
    <>
  
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
    </head>
    <body>
          {/* You can add a sub-navigation or a back button here if needed */}
      <main>{children}</main>
    </body>
    </html>
    
    </>
    
  );
}