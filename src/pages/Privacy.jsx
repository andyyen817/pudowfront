import React from 'react';
import { Camera, Database, Lock, Mail, MapPin, Shield, Smartphone } from 'lucide-react';

const contact = {
  email: 'contact@airkop.com',
  phone: '+62 857 8856 8888',
  address: 'GRHA INDUK-KUD, JL. BUNCIT RAYA NO. 20, Pejaten Barat, Pasar Minggu, Jakarta Selatan, DKI Jakarta, 12510',
};

const appInfo = [
  { label: 'App name', value: 'ATMWATER' },
  { label: 'Package name', value: 'com.atmwater.client' },
  { label: 'Developer', value: 'andy颜秉田' },
  { label: 'Last updated', value: 'May 26, 2026' },
];

const sections = [
  {
    icon: Camera,
    title: 'Information We Collect',
    body: 'The App may collect account and contact information, device information, inspection or maintenance photos, QR code scan results, service records, and location data when these are needed for core App functions.',
    items: [
      'Camera access is used to scan smart water dispenser QR codes and take steward inspection or maintenance photos.',
      'Photo or media access is used when users choose or upload inspection, maintenance, or KUD photo review images.',
      'Location access is used to discover, connect, inspect, or maintain nearby smart water dispensing devices when supported by the App workflow.',
      'Device and service records are used to identify equipment, submit alerts, support troubleshooting, and keep service operations stable.',
    ],
  },
  {
    icon: Smartphone,
    title: 'How We Use Information',
    body: 'We use collected information only for operating ATMWATER, supporting smart water dispensing hardware, managing steward inspection workflows, and improving service reliability.',
    items: [
      'Provide App login, device scan, inspection upload, and maintenance features.',
      'Review KUD-related inspection photos and device operation records.',
      'Troubleshoot equipment issues, service alerts, and App stability problems.',
      'Provide customer support, safety checks, compliance handling, and service notifications.',
    ],
  },
  {
    icon: Database,
    title: 'Data Sharing and Retention',
    body: 'We do not sell personal information. Data may be shared only with service providers or operating partners when required to provide the App service, comply with law, protect users, or maintain smart water equipment.',
    items: [
      'Inspection and device operation data is retained only for operational, maintenance, audit, and legal needs.',
      'Account deletion or data correction requests can be submitted through the contact channels below.',
      'Some transaction, audit, or security records may be retained where required by law or legitimate operational obligations.',
    ],
  },
  {
    icon: Lock,
    title: 'Data Protection',
    body: 'We use commercially reasonable administrative, technical, and organizational safeguards to protect information submitted through the App.',
    items: [
      'Data transmission should use secure channels where supported by the production service.',
      'Access to inspection, device, and account data should be limited to authorized personnel or systems.',
      'No internet transmission or electronic storage method can be guaranteed to be 100% secure.',
    ],
  },
];

const chineseSections = [
  {
    title: '一、信息收集与使用',
    body: '本隐私政策适用于移动应用程序 ATMWATER（包名：com.atmwater.client）。本应用由个人独立开发者 andy颜秉田 开发、拥有并运营。为了提供智能水机管理、设备扫码、巡检维护、KUD 照片审核等核心功能，本应用可能收集账号资料、联系方式、设备资料、巡检或维护照片、二维码扫描结果、服务记录以及必要的位置资料。',
  },
  {
    title: '二、权限用途',
    body: '相机权限用于扫描水机设备二维码，以及拍摄或上传水管家巡检、维护照片。相册或媒体权限用于用户选择或上传巡检、维护、KUD 审核相关图片。位置权限用于发现、连接、巡检或维护附近的智能水机设备，具体以 App 实际功能为准。',
  },
  {
    title: '三、数据使用、共享与保存',
    body: '我们仅将数据用于设备管理、巡检维护、故障排查、服务稳定性、客服支持和合规处理。我们不会出售个人信息。仅在提供服务、法律要求、保护用户或维护设备所必需时，才会与服务提供商或运营合作方共享必要资料。',
  },
  {
    title: '四、联系我们',
    body: `如需咨询隐私政策、账号删除、资料更正或数据处理问题，请联系：Email：${contact.email}；Phone：${contact.phone}；Address：${contact.address}。最近更新日期：2026年5月26日。`,
  },
];

const indonesiaSections = [
  {
    title: '1. Pengumpulan dan Penggunaan Informasi',
    body: 'Kebijakan Privasi ini berlaku untuk aplikasi seluler ATMWATER (nama paket: com.atmwater.client). Aplikasi ini dikembangkan, dimiliki, dan dioperasikan oleh pengembang individu andy颜秉田. Untuk menjalankan fungsi utama, Aplikasi dapat mengumpulkan informasi akun, kontak, perangkat, foto inspeksi atau pemeliharaan, hasil pemindaian QR, catatan layanan, dan data lokasi yang diperlukan.',
  },
  {
    title: '2. Izin Aplikasi',
    body: 'Izin kamera digunakan untuk memindai kode QR perangkat dispenser air pintar serta mengambil atau mengunggah foto inspeksi dan pemeliharaan. Izin foto atau media digunakan untuk memilih atau mengunggah gambar inspeksi, pemeliharaan, atau tinjauan foto KUD. Izin lokasi digunakan untuk menemukan, menghubungkan, memeriksa, atau memelihara perangkat air pintar terdekat jika diperlukan oleh fitur Aplikasi.',
  },
  {
    title: '3. Penggunaan, Pembagian, dan Penyimpanan Data',
    body: 'Kami menggunakan data hanya untuk pengelolaan perangkat, inspeksi, pemeliharaan, pemecahan masalah, stabilitas layanan, dukungan pelanggan, dan kepatuhan. Kami tidak menjual informasi pribadi. Data hanya dibagikan bila diperlukan untuk menyediakan layanan, mematuhi hukum, melindungi pengguna, atau memelihara perangkat.',
  },
  {
    title: '4. Hubungi Kami',
    body: `Untuk pertanyaan privasi, penghapusan akun, koreksi data, atau pemrosesan data, hubungi: Email: ${contact.email}; Phone: ${contact.phone}; Address: ${contact.address}. Terakhir diperbarui: 26 Mei 2026.`,
  },
];

const Privacy = () => {
  return (
    <div className="flex flex-col font-sans bg-gray-50 text-gray-800">
      <section className="bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
              <Shield className="h-9 w-9" aria-hidden="true" />
            </div>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-blue-200 font-semibold mb-3">Google Play App Privacy Policy</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Privacy Policy for ATMWATER
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              This Privacy Policy applies to the ATMWATER mobile application, package name
              <span className="font-semibold text-white"> com.atmwater.client</span>, developed,
              owned, and operated by the individual developer
              <span className="font-semibold text-white"> andy颜秉田</span>.
            </p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {appInfo.map((item) => (
              <div key={item.label} className="bg-white/10 border border-white/15 rounded-lg px-4 py-4">
                <dt className="text-sm text-blue-200">{item.label}</dt>
                <dd className="font-semibold text-white mt-1 break-words">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <main className="py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-4">Scope of This Policy</h2>
            <p className="text-gray-700 leading-7">
              ATMWATER interacts with smart water dispensing hardware and supports steward inspection,
              maintenance, equipment troubleshooting, and KUD photo review workflows. This policy
              explains what information may be collected, why it is used, how it may be protected, and
              how users can contact us about privacy questions.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <section key={section.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-950">{section.title}</h2>
                  </div>
                  <p className="text-gray-700 leading-7 mb-4">{section.body}</p>
                  <ul className="space-y-2 text-gray-700">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2 leading-6">
                        <span className="text-blue-700 font-bold" aria-hidden="true">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 mb-10">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="h-6 w-6 text-blue-700 mt-1" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-bold text-gray-950">Contact Us</h2>
                <p className="text-gray-700 mt-2">
                  If you have questions about this Privacy Policy, data access, correction, account
                  deletion, or other privacy requests, please contact us through the channels below.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800">
              <a href={`mailto:${contact.email}`} className="bg-white rounded-lg border border-blue-100 p-4 hover:border-blue-300 transition">
                <span className="block text-sm text-gray-500 mb-1">Email</span>
                <span className="font-semibold break-words">{contact.email}</span>
              </a>
              <a href="tel:+6285788568888" className="bg-white rounded-lg border border-blue-100 p-4 hover:border-blue-300 transition">
                <span className="block text-sm text-gray-500 mb-1">Phone</span>
                <span className="font-semibold">{contact.phone}</span>
              </a>
              <div className="bg-white rounded-lg border border-blue-100 p-4">
                <span className="block text-sm text-gray-500 mb-1">Address</span>
                <span className="font-semibold leading-6">{contact.address}</span>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-red-600" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-950">隐私政策</h2>
            </div>
            <div className="space-y-4">
              {chineseSections.map((section) => (
                <article key={section.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-950 mb-3">{section.title}</h3>
                  <p className="text-gray-700 leading-7">{section.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4">Kebijakan Privasi</h2>
            <div className="space-y-4">
              {indonesiaSections.map((section) => (
                <article key={section.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-950 mb-3">{section.title}</h3>
                  <p className="text-gray-700 leading-7">{section.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
