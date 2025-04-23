import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Badge from "../Components/Badge";
import CardProject from "../Components/CardProject";

function Home() {
  const experiences = [
    {
      title: "Junior Web Developer",
      provider: "DigiUp x Telkom Indonesia",
      date: "November 2022",
      description:
        "Mempelajari pengembangan web menggunakan CodeIgniter 4 dan Bootstrap 5 dengan pendekatan MVC dan penerapan fitur CRUD.",
    },
    {
      title: "Sertifikasi Jaringan Komputer",
      provider: "Axioo Class Program",
      date: "Maret 2023",
      description:
        "Menguasai instalasi perangkat jaringan, konfigurasi IP dan routing, serta pemasangan jaringan nirkabel yang aman.",
    },
    {
      title: "Junior Desain Grafis",
      provider: "Digitalent x Kominfo",
      date: "Juli 2024",
      description:
        "Mendalami prinsip dasar desain visual, warna, dan tipografi serta mengaplikasikannya menggunakan software desain grafis.",
    },
    {
      title: "Machine Learning Engineer",
      provider: "Coding Camp powered by DBS Foundation",
      date: "Februari 2024 - Sekarang",
      description:
        "Mempelajari dasar-dasar visualisasi data, machine learning, deep learning, dan klasifikasi gambar serta mengerjakan submission yang diberikan.",
    },
  ];

  const certifications = [
    {
      title: "Belajar Machine Learning untuk Pemula",
      issued: "April 2025",
      expired: "April 2028",
      id: "0LZ0RE600P65",
    },
    {
      title: "Belajar Analisis Data dengan Python",
      issued: "Maret 2025",
      expired: "Maret 2028",
      id: "MEPJQML16X3V",
    },
    {
      title: "Belajar Dasar Visualisasi Data",
      issued: "Februari 2025",
      expired: "Februari 2028",
      id: "L4PQE1K42PO1",
    },
    {
      title: "Belajar Dasar AI",
      issued: "Februari 2025",
      expired: "Februari 2028",
      id: "1OP82NKY2PQK",
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      issued: "Februari 2025",
      expired: "Februari 2028",
      id: "N9ZO9O5VYXG5",
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      issued: "Februari 2025",
      expired: "Februari 2028",
      id: "0LZ0RRL7KP65",
    },

    // {
    //   title:
    //     "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    //   issued: "Februari 2025",
    //   expired: "Februari 2028",
    //   id: "2VX3K6RDQXYQ",
    // },
    // {
    //   title: "Memulai Pemrograman dengan Python",
    //   issued: "Februari 2025",
    //   expired: "Februari 2028",
    //   id: "MEPJQ283WX3V",
    // },
    // {
    //   title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    //   issued: "Februari 2025",
    //   expired: "Februari 2028",
    //   id: "JLX19WEMJP72",
    // },
  ];

  return (
    <MainLayouts>
      <header
        id="home"
        className="min-h-dvh md:min-h-screen flex flex-col justify-center items-center gap-8 text-center bg-gray-950 text-gray-50">
        <div className="flex flex-col justify-center items-center gap-3.5">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Hai, Saya Ahmad Hamdani.
          </h1>
          <h2 className="font-medium text-sm md:text-base lg:text-lg text-gray-400 max-w-[720px]">
            Saat ini saya sedang belajar dan sangat antusias dalam mengembangkan
            Website, Aplikasi, Data Science, dan Machine Learning.
          </h2>
        </div>
        <div className="flex gap-2 md:gap-6">
          <a
            href="https://wa.me/6285607599369"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-50 hover:bg-gray-900 rounded-lg text-base md:text-lg font-semibold inline-block">
            Hire Me
          </a>

          <a
            href="/assets/cv-ahmad.pdf"
            download="CV_AHMAD HAMDANI.pdf"
            className="px-4 py-2 bg-gray-50 text-gray-950 hover:bg-gray-200 rounded-lg text-base md:text-lg font-semibold inline-block ml-2">
            Download CV
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-3.5">
          <h2 className="font-medium text-sm md:text-base">Hubungi Saya</h2>
          <div className="flex gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6265607599369"
              className="flex gap-1"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                className="text-gray-00 w-8 md:w-10 hover:text-gray-50 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100049775690863&mibextid=ZbWKwL"
              className="text-gray-00 hover:text-gray-50 w-8 md:w-10 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 24 24">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hamdani_qhmqd/"
              className="text-gray-00 hover:text-gray-50 w-8 md:w-10 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 24 24">
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmad-hamdani-769b45280/"
              className="text-gray-00 hover:text-gray-50 w-8 md:w-10 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 24 24">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/hamdaniqhmqd"
              className="text-gray-00 hover:text-gray-50 w-8 md:w-10 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/hamdaniqhmqd"
              className="text-gray-00 hover:text-gray-50 w-8 md:w-10 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 24 24">
                <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section
        id="tentang_saya"
        className="min-h-dvh md:min-h-screen w-full py-12 md:py-14 lg:py-16">
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-12">
          Tentang Saya
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center">
          <figure className="flex-1 flex justify-center">
            <img
              src="imgs/is_me.jpg"
              alt=""
              className="aspect-3/4 object-cover w-[280px] rounded-lg"
            />
          </figure>
          <div className="flex-1 flex flex-col gap-2 font-medium text-base md:text-lg text-gray-400">
            <p className="">
              Nama saya Ahmad Hamdani. Saat ini, saya tengah menjalani program
              studi D3 Teknologi Informasi di Politeknik Negeri Madiun, yang
              memberi saya dasar yang kuat dalam pengembangan dan pemrograman di
              berbagai platform teknologi.
            </p>
            <p className="">
              Ketertarikan utama saya ada pada pengembangan website, aplikasi
              mobile, machine learning dan data science. Saya sangat antusias
              dalam menggali lebih dalam berbagai teknologi web dan aplikasi,
              serta memanfaatkan data untuk menciptakan solusi yang lebih
              inovatif. Saya telah mengeksplorasi berbagai teknologi dalam
              pengembangan perangkat lunak seperti Laravel untuk pengembangan
              web backend, Kotlin untuk pengembangan aplikasi Android,
              Matplotlib dan Seaborn untuk visualisasi data, serta scikit-learn
              untuk pembuatan model machine learning.
            </p>
            <p className="">
              Selain itu, saya juga aktif mengembangkan proyek-proyek berbasis
              data dan solusi digital yang fokus pada analisis dan pengelolaan
              data.
            </p>
          </div>
        </div>
      </section>

      <section
        id="proyek"
        className="min-h-dvh md:min-h-screen w-full py-12 md:py-14 lg:py-16">
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-12">
          Proyek
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-6 mb-12">
          <CardProject
            title={"Agropupuk"}
            description="Website informasi pupuk yang dikembangkan menggunakan Laravel 11 dengan fitur CRUD, pengelolaan konten dinamis seperti berita, artikel, dan katalog produk yang saling berelasi, serta sistem autentikasi berbasis session."
            img="imgs/agropupuk1.png"
            className="w-full lg:flex-1 flex flex-col gap-3.5">
            <Badge img={"icons/Laravel.svg"}>Laravel 11</Badge>
            <Badge img={"icons/MySQL.svg"}>MySQL</Badge>
            <Badge img={"icons/XAMPP.svg"}>XAMPP</Badge>
            <Badge img={"icons/TailwindCSS.svg"}>TailwindCSS</Badge>
            <Badge img={"icons/figma.png"}>Figma</Badge>
            <Badge img={"icons/draw_io.png"}>Draw Io</Badge>
          </CardProject>

          <CardProject
            title={"Aplikasi Monitoring Gudang"}
            description="Aplikasi Android berbasis Kotlin dan XML dengan arsitektur MVVM, menyediakan fitur CRUD untuk data Supplier, Barang, dan Transaksi yang saling berelasi, serta integrasi database offline (Room) dan online melalui REST API Laravel 11."
            img="imgs/apk_monitoring_gudang2.png"
            className="w-full lg:flex-1 flex flex-col gap-3.5">
            <Badge img={"icons/kotlin.png"}>Kotlin</Badge>
            <Badge img={"icons/xml.png"}>XML</Badge>
            <Badge img={"icons/sqlite.png"}>SQLite</Badge>
          </CardProject>

          <CardProject
            title={"Project Predict Saham BBRI"}
            description="Mengembangkan model prediksi harga saham BBRI menggunakan Linear Regression dengan data historis, mengolah data saham dengan Pandas dan membaginya untuk pelatihan model, serta membuat aplikasi Streamlit untuk menampilkan hasil prediksi dan evaluasi model."
            img="imgs/prediksi_saham2.png"
            className="w-full lg:flex-1 flex flex-col gap-3.5">
            <Badge img={"icons/python.png"}>Python</Badge>
            <Badge img={"icons/pandas.png"}>Pandas</Badge>
            <Badge img={"icons/scikit-learn.png"}>Scikit-Learn</Badge>
            <Badge img={"icons/Streamlit.svg"}>Streamlit</Badge>
          </CardProject>
        </div>

        <div className="w-full flex justify-center items-center">
          <Link
            // to="/Projects"
            className="px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-300 text-gray-900 text-sm text-center font-medium">
            Project Lainnya
          </Link>
        </div>
      </section>

      <section
        id="pelatihan"
        className="min-h-dvh md:min-h-screen w-full py-12 md:py-14 lg:py-16">
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-12">
          Pelatihan
        </h1>
        <div className="w-full grid items-center justify-center gap-6 max-w-[960px] mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="grid gap-2">
              <div className="grid gap-1">
                <h1 className={`font-bold text-xl md:text-2xl `}>
                  {exp.title}
                </h1>
                <h3 className="font-semibold text-base text-gray-300">
                  {exp.provider} | {exp.date}
                </h3>
              </div>
              <p className="font-normal text-base text-gray-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="sertifikasi"
        className="min-h-dvh md:min-h-screen w-full py-12 md:py-14 lg:py-16">
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-12">
          Sertifikasi
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {certifications.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <img
                src="icons/sertifikat_dicoding.png"
                alt=""
                className="w-16 h-16"
              />
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-xl">{item.title}</h1>
                <p className="text-gray-300 text-base">
                  Dicoding Indonesia <br />
                  Diterbitkan: {item.issued} | Kedaluwarsa: {item.expired}
                </p>
                <p className="text-gray-300 text-base">
                  ID Kredensial:{" "}
                  <a
                    href={`https://www.dicoding.com/certificates/${item.id}`}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-700">
                    {item.id}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center">
          <Link
            // to="/Certifications"
            className="px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-300 text-gray-900 text-sm text-center font-medium">
            Sertifikasi Lainnya
          </Link>
        </div>
      </section>
    </MainLayouts>
  );
}
export default Home;
