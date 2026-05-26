import React from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, Database, Lock, Mail, Shield, Smartphone } from 'lucide-react';

const contact = {
  email: 'contact@airkop.com',
  phone: '+62 857 8856 8888',
  address: 'GRHA INDUK-KUD, JL. BUNCIT RAYA NO. 20, Pejaten Barat, Pasar Minggu, Jakarta Selatan, DKI Jakarta, 12510',
};

const appDetails = {
  appName: 'ATMWATER',
  packageName: 'com.atmwater.client',
  developer: 'andy颜秉田',
};

const content = {
  en: {
    eyebrow: 'Privacy Policy',
    title: 'AirKOP Product Privacy Policy',
    subtitle:
      'This policy explains how AirKOP services protect information used by the ATMWATER mobile app and smart water dispensing operations.',
    updated: 'Last updated: May 26, 2026',
    scopeTitle: 'Scope of this policy',
    scope:
      'ATMWATER supports smart water dispensing hardware, water steward inspection, maintenance, equipment troubleshooting, and KUD photo review workflows. We use information only to operate these services, protect users, maintain equipment, and improve service stability.',
    sections: [
      {
        icon: Camera,
        title: 'Information we collect',
        body:
          'Depending on the features you use, the app may collect account and contact information, device information, inspection or maintenance photos, QR code scan results, service records, and location data needed for core app functions.',
        items: [
          'Camera access is used to scan smart water dispenser QR codes and take inspection or maintenance photos.',
          'Photo or media access is used when users choose or upload inspection, maintenance, or KUD review images.',
          'Location access is used to discover, connect, inspect, or maintain nearby smart water dispensing devices when supported by the app workflow.',
        ],
      },
      {
        icon: Smartphone,
        title: 'How we use information',
        body:
          'We use collected information to provide the app service, operate smart water devices, support stewards, review inspection materials, and handle customer or technical support.',
        items: [
          'Provide login, device scanning, inspection upload, maintenance, and service notification features.',
          'Review KUD-related inspection photos and device operation records.',
          'Troubleshoot equipment issues, service alerts, and app stability problems.',
        ],
      },
      {
        icon: Database,
        title: 'Data sharing and retention',
        body:
          'We do not sell personal information. Information may be shared only when needed to provide the service, comply with law, protect users, or maintain smart water equipment.',
        items: [
          'Inspection and device operation data is retained for operational, maintenance, audit, and legal needs.',
          'Account deletion, data access, or correction requests can be submitted through the contact channels below.',
          'Some transaction, audit, or security records may be retained where required by law or legitimate operational obligations.',
        ],
      },
      {
        icon: Lock,
        title: 'Data protection',
        body:
          'We use commercially reasonable administrative, technical, and organizational safeguards to protect information submitted through the app.',
        items: [
          'Production data should be transmitted through secure channels where supported by the service.',
          'Access to inspection, device, and account data should be limited to authorized personnel or systems.',
          'No internet transmission or electronic storage method can be guaranteed to be 100% secure.',
        ],
      },
    ],
    detailsTitle: 'App details for Google Play',
    detailsIntro:
      'The following app information is provided for Google Play review and user transparency.',
    detailLabels: {
      appName: 'App name',
      packageName: 'Package name',
      developer: 'Developer',
      updated: 'Last updated',
    },
    contactTitle: 'Contact us',
    contactIntro:
      'If you have privacy questions, data access requests, correction requests, or account deletion requests, contact us through the channels below.',
  },
  zh: {
    eyebrow: '隐私政策',
    title: 'AirKOP 产品隐私政策',
    subtitle:
      '本政策说明 AirKOP 服务如何保护 ATMWATER 移动应用与智能水机运营过程中使用的信息。',
    updated: '最近更新日期：2026年5月26日',
    scopeTitle: '政策适用范围',
    scope:
      'ATMWATER 支持智能水机硬件、水管家巡检、维护、设备故障排查以及 KUD 照片审核流程。我们仅为提供这些服务、保护用户、维护设备以及提升服务稳定性而使用相关信息。',
    sections: [
      {
        icon: Camera,
        title: '我们收集的信息',
        body:
          '根据您使用的功能，本应用可能收集账号与联系资料、设备资料、巡检或维护照片、二维码扫描结果、服务记录，以及核心功能所需的位置资料。',
        items: [
          '相机权限用于扫描智能水机设备二维码，以及拍摄巡检或维护照片。',
          '照片或媒体权限用于用户选择或上传巡检、维护、KUD 审核相关图片。',
          '位置权限用于在 App 流程支持时发现、连接、巡检或维护附近的智能水机设备。',
        ],
      },
      {
        icon: Smartphone,
        title: '我们如何使用信息',
        body:
          '我们使用收集的信息来提供 App 服务、运营智能水机设备、支持水管家、审核巡检资料，并处理客户支持或技术支持问题。',
        items: [
          '提供登录、设备扫码、巡检上传、维护和服务通知功能。',
          '审核 KUD 相关巡检照片和设备运行记录。',
          '排查设备问题、服务告警以及 App 稳定性问题。',
        ],
      },
      {
        icon: Database,
        title: '数据共享与保存',
        body:
          '我们不会出售个人信息。仅在提供服务、遵守法律、保护用户或维护智能水机设备所必需时，才会共享必要信息。',
        items: [
          '巡检和设备运行数据会根据运营、维护、审计和法律需要保存。',
          '账号删除、数据访问或资料更正请求可通过下方联系方式提交。',
          '部分交易、审计或安全记录可能会因法律要求或正当运营义务而继续保存。',
        ],
      },
      {
        icon: Lock,
        title: '数据保护',
        body:
          '我们采用商业上合理的管理、技术和组织措施，保护通过本应用提交的信息。',
        items: [
          '生产数据应在服务支持的情况下通过安全通道传输。',
          '巡检、设备和账号数据应仅限授权人员或系统访问。',
          '任何互联网传输或电子存储方式都无法保证 100% 绝对安全。',
        ],
      },
    ],
    detailsTitle: 'Google Play 应用资料',
    detailsIntro: '以下应用资料用于 Google Play 审核与用户透明说明。',
    detailLabels: {
      appName: '应用名称',
      packageName: '包名',
      developer: '开发者',
      updated: '最近更新',
    },
    contactTitle: '联系我们',
    contactIntro:
      '如果您有隐私问题、数据访问请求、资料更正请求或账号删除请求，请通过以下方式联系我们。',
  },
  id: {
    eyebrow: 'Kebijakan Privasi',
    title: 'Kebijakan Privasi Produk AirKOP',
    subtitle:
      'Kebijakan ini menjelaskan bagaimana layanan AirKOP melindungi informasi yang digunakan oleh aplikasi seluler ATMWATER dan operasi dispenser air pintar.',
    updated: 'Terakhir diperbarui: 26 Mei 2026',
    scopeTitle: 'Ruang lingkup kebijakan',
    scope:
      'ATMWATER mendukung perangkat dispenser air pintar, inspeksi pengurus air, pemeliharaan, pemecahan masalah perangkat, dan alur peninjauan foto KUD. Kami menggunakan informasi hanya untuk menjalankan layanan, melindungi pengguna, memelihara perangkat, dan meningkatkan stabilitas layanan.',
    sections: [
      {
        icon: Camera,
        title: 'Informasi yang kami kumpulkan',
        body:
          'Tergantung fitur yang digunakan, aplikasi dapat mengumpulkan informasi akun dan kontak, informasi perangkat, foto inspeksi atau pemeliharaan, hasil pemindaian QR, catatan layanan, dan data lokasi yang diperlukan untuk fungsi utama aplikasi.',
        items: [
          'Akses kamera digunakan untuk memindai kode QR perangkat dispenser air pintar dan mengambil foto inspeksi atau pemeliharaan.',
          'Akses foto atau media digunakan ketika pengguna memilih atau mengunggah gambar inspeksi, pemeliharaan, atau tinjauan KUD.',
          'Akses lokasi digunakan untuk menemukan, menghubungkan, memeriksa, atau memelihara perangkat dispenser air pintar terdekat jika didukung oleh alur aplikasi.',
        ],
      },
      {
        icon: Smartphone,
        title: 'Cara kami menggunakan informasi',
        body:
          'Kami menggunakan informasi yang dikumpulkan untuk menyediakan layanan aplikasi, mengoperasikan perangkat air pintar, mendukung pengurus air, meninjau materi inspeksi, serta menangani dukungan pelanggan atau teknis.',
        items: [
          'Menyediakan fitur login, pemindaian perangkat, unggah inspeksi, pemeliharaan, dan notifikasi layanan.',
          'Meninjau foto inspeksi terkait KUD dan catatan operasi perangkat.',
          'Memecahkan masalah perangkat, peringatan layanan, dan stabilitas aplikasi.',
        ],
      },
      {
        icon: Database,
        title: 'Pembagian dan penyimpanan data',
        body:
          'Kami tidak menjual informasi pribadi. Informasi hanya dapat dibagikan jika diperlukan untuk menyediakan layanan, mematuhi hukum, melindungi pengguna, atau memelihara perangkat air pintar.',
        items: [
          'Data inspeksi dan operasi perangkat disimpan untuk kebutuhan operasional, pemeliharaan, audit, dan hukum.',
          'Permintaan penghapusan akun, akses data, atau koreksi data dapat diajukan melalui kontak di bawah ini.',
          'Beberapa catatan transaksi, audit, atau keamanan dapat disimpan jika diwajibkan oleh hukum atau kewajiban operasional yang sah.',
        ],
      },
      {
        icon: Lock,
        title: 'Perlindungan data',
        body:
          'Kami menggunakan perlindungan administratif, teknis, dan organisasi yang wajar secara komersial untuk melindungi informasi yang dikirim melalui aplikasi.',
        items: [
          'Data produksi harus dikirim melalui saluran aman jika didukung oleh layanan.',
          'Akses ke data inspeksi, perangkat, dan akun harus dibatasi untuk personel atau sistem yang berwenang.',
          'Tidak ada metode transmisi internet atau penyimpanan elektronik yang dapat dijamin 100% aman.',
        ],
      },
    ],
    detailsTitle: 'Detail aplikasi untuk Google Play',
    detailsIntro:
      'Informasi aplikasi berikut disediakan untuk peninjauan Google Play dan transparansi pengguna.',
    detailLabels: {
      appName: 'Nama aplikasi',
      packageName: 'Nama paket',
      developer: 'Pengembang',
      updated: 'Terakhir diperbarui',
    },
    contactTitle: 'Hubungi kami',
    contactIntro:
      'Jika Anda memiliki pertanyaan privasi, permintaan akses data, koreksi data, atau penghapusan akun, hubungi kami melalui saluran di bawah ini.',
  },
};

const getContent = (language) => {
  const normalized = language?.split('-')[0];
  return content[normalized] || content.en;
};

const Privacy = () => {
  const { i18n } = useTranslation();
  const policy = getContent(i18n.language);

  const details = [
    { label: policy.detailLabels.appName, value: appDetails.appName },
    { label: policy.detailLabels.packageName, value: appDetails.packageName },
    { label: policy.detailLabels.developer, value: appDetails.developer },
    { label: policy.detailLabels.updated, value: policy.updated },
  ];

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
            <p className="text-blue-200 font-semibold mb-3">{policy.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              {policy.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {policy.subtitle}
            </p>
          </div>
        </div>
      </section>

      <main className="py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-4">{policy.scopeTitle}</h2>
            <p className="text-gray-700 leading-7">{policy.scope}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {policy.sections.map((section) => {
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

          <section className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm mb-8">
            <div className="flex items-start gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Database className="h-5 w-5 text-blue-700" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-950">{policy.detailsTitle}</h2>
                <p className="text-gray-700 mt-2">{policy.detailsIntro}</p>
              </div>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {details.map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-4">
                  <dt className="text-sm text-gray-500">{item.label}</dt>
                  <dd className="font-semibold text-gray-950 mt-1 break-words">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="h-6 w-6 text-blue-700 mt-1" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-bold text-gray-950">{policy.contactTitle}</h2>
                <p className="text-gray-700 mt-2">{policy.contactIntro}</p>
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
        </div>
      </main>
    </div>
  );
};

export default Privacy;
