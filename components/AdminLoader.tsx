import React, { useEffect, useState } from 'react';

// This component simulates the /admin/index.html behavior required for Netlify CMS
const AdminLoader: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // 1. Fake Hacking Logs Animation
    const messages = [
      "INITIALIZING SECURE PROTOCOL v9.0.1...",
      "RESOLVING PROXY...",
      "BYPASSING FIREWALL LAYER 7...",
      "HANDSHAKE INITIATED...",
      "VERIFYING BIOMETRICS...",
      "ACCESS TOKEN: GRANTED",
      "LOADING CONTENT MANAGEMENT SYSTEM..."
    ];

    let delay = 0;
    messages.forEach((msg, index) => {
      delay += Math.random() * 300 + 200; // Random delay between messages
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
      }, delay);
    });

    // 2. Loading Dots Animation
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // 3. CMS Initialization Logic
    const initCMS = () => {
        const config = `
backend:
  name: git-gateway
  branch: main
media_folder: "public/images/uploads"
public_folder: "/images/uploads"
collections:
  - name: "projects"
    label: "Projects"
    folder: "content/projects"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Tags", name: "tags", widget: "list"}
      - {label: "Cover Image", name: "thumbnail", widget: "image"}
      - {label: "Category", name: "category", widget: "select", options: ["Mobile", "Web", "Utility"]}
  - name: "testimonials"
    label: "Testimonials"
    folder: "content/testimonials"
    create: true
    fields:
      - {label: "Name", name: "name", widget: "string"}
      - {label: "Role", name: "role", widget: "string"}
      - {label: "Quote", name: "quote", widget: "text"}
`;
        console.log('Initializing CMS...');
        // @ts-ignore
        if (window.CMS && window.jsyaml) {
             // @ts-ignore
             window.CMS.init({ config: window.jsyaml.load(config) });
        } else {
            console.error("CMS or js-yaml not found");
        }
    };

    // 4. Inject Scripts Sequentially
    const loadScripts = async () => {
        // Load YAML parser first
        if (!window.hasOwnProperty('jsyaml')) {
            await new Promise<void>((resolve) => {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js';
                script.onload = () => resolve();
                document.head.appendChild(script);
            });
        }

        // Load Netlify CMS
        // @ts-ignore
        if (!window.CMS) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js';
            script.onload = () => {
                initCMS();
            };
            document.head.appendChild(script);
        } else {
            initCMS();
        }
    };

    // Simulate HTML structure Netlify CMS expects by modifying document
    document.title = 'ROOT ACCESS // ADMIN';
    loadScripts();

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-hack-bg text-hack-green font-mono p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background visual noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(34, 197, 94, .1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, .1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-md w-full border border-hack-green/30 bg-hack-panel p-6 shadow-[0_0_30px_rgba(34,197,94,0.1)] relative z-10">
        <div className="flex justify-between items-center border-b border-hack-green/20 pb-2 mb-4">
           <span className="text-xs text-hack-muted">SECURE_GATEWAY_V1</span>
           <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
             <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
             <div className="w-2 h-2 rounded-full bg-hack-green"></div>
           </div>
        </div>

        <div className="space-y-2 mb-8 h-48 overflow-y-auto font-mono text-sm">
           {logs.map((log, i) => (
             <div key={i} className="flex">
               <span className="text-hack-muted mr-2">[{new Date().toLocaleTimeString()}]</span>
               <span className="text-hack-green">{log}</span>
             </div>
           ))}
           <div className="text-hack-neon animate-pulse">
             _{dots}
           </div>
        </div>

        <div className="border-t border-hack-green/20 pt-4 text-center">
           <p className="text-xs text-hack-muted mb-2">RESTRICTED AREA. AUTHORIZED PERSONNEL ONLY.</p>
           <div className="w-full bg-hack-bg h-1 rounded overflow-hidden">
              <div className="h-full bg-hack-green animate-[width_2s_ease-in-out_infinite]" style={{ width: '100%' }}></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoader;