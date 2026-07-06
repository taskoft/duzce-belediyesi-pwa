# PROJE GELİŞTİRME KURALLARI VE PRENSİPLERİ (DUZCE PWA)

## 1. İletişim ve Üslup Kuralları
1. **Gereksiz Konuşmadan Kaçın:** Açıklamaları minimumda tut. Yapay övgü, dolgu cümleleri, pazarlama dili veya "Harika bir fikir!", "Bunu hemen yapıyorum" gibi ifadeler kesinlikle kullanma.
2. **Çözüm Odaklı ve Teknik Ol:** Sadece yapılan işi, kod bloklarını ve gerekliyse kritik teknik kararları yaz. Pratik çözümler sunan uzman bir üslup benimse.
3. **Dil Ayrımı:** Projenin mimarisi, klasörleri, fonksiyon isimleri, değişkenleri ve yorum satırları tamamen **İngilizce** yazılacaktır. Kullanıcıya dönük arayüz metinleri, toast mesajları ve loglar ise tamamen **Türkçe** olacaktır.

## 2. Mimari ve Kodlama Standartları (Clean Code)
4. **DRY (Don't Repeat Yourself):** Bir bileşeni veya mantığı iki defa yazma. Global bileşenleri (`Button`, `Modal`, `Toast`) kullan, gerekirse bunları `props` ile özelleştir.
5. **Klasör Yapısına Sadık Kal:** Bileşenleri işlevlerine göre `src/components/common/` ve `src/components/dashboard/` gibi ilgili dizinlerde oluştur.
6. **Custom Hooks:** API çağrılarını, form kontrollerini veya karmaşık UI mantıklarını doğrudan component içine yazma. Mutlaka custom hook (`useToast`, `useForm` vb.) kullan.
7. **Semantic HTML & Tailwind:** Satır içi (inline) style kesinlikle kullanma. Tamamen anlamlı HTML etiketleri (`main`, `section`, `nav`) ve responsive Tailwind sınıfları kullan.
8. **Component Boyutları:** Bir component dosyasının 150 satırı geçmemesine özen göster. Çok büyüyen componentleri alt parçalara ayır.
9. **Kapsamlı Prop Tipleri:** Componentlerin aldığı prop'ları (eğer TypeScript ise type/interface ile, JS ise temiz destructuring ile) mutlak doğrulukla tanımla.

## 3. Form Kontrolleri ve UX Güvenliği
10. **Strict Girdi Kontrolleri:** Sayısal input alanlarında (`T.C. Kimlik`, `Sicil No`, `Kart Numarası`) harf girişini anında `onChange` seviyesinde regex ile engelle.
11. **Otomatik Biçimlendirme:** Kart numarası girişi gibi alanlarda her 4 hanede bir otomatik boşluk (`#### #### #### ####`) ekleyen yardımcı fonksiyonları entegre et.
12. **Focus ve Active State:** Form elemanlarında `focus`, butonlarda `hover` ve `active` durumlarının görsel efektlerini Tailwind ile eksiksiz tanımla.
13. **Z-Index Yönetimi:** `Modal` ve `Toast` gibi overlay bileşenlerin `z-index` değerlerini sabitle (`z-50`), alt katmanların üstüne taşmasını engelle.

## 4. PWA ve Mobil Öncelikli Geliştirme
14. **Mobile-First Responsive:** Tasarımları 390px (dikey telefon ekranı) baz alarak geliştir. `md:` ve `lg:` kırılmalarını yalnızca gerekliyse esnet.
15. **Sticky Elements:** `BottomNav` ve `Header` bileşenlerini viewport'a sabitle. İçerik alanının dikeyde `overflow-y-auto` ile kaymasını sağla.
16. **Offline Uyumluluk Hazırlığı:** Uygulama genelinde statik mock verileri (E-Belediye borçları, otobüs hatları vb.) local JSON dosyalarından oku ki sunum esnasında internet kesilse bile uygulama çalışmaya devam etsin.

## 5. Hata Yakalama ve Durum Yönetimi
17. **Merkezi Bildirim (Toast):** Hatalı dosya yükleme (örn: 5MB üzeri), eksik form girişi gibi durumlarda merkezi `useToast` hook'unu çağırarak kırmızı hata bildirimi fırlat.
18. **Loading Animasyonları:** Asenkron veya simüle edilen işlemler esnasında (`Ödeme Yap` butonuna basıldığında) buton içine veya ekrana şık bir `Spinner` ekle.
19. **Form Validation:** Gönder butonu tetiklendiğinde formu boş göndermeyi engelleyen kontrolleri yap, hata varsa input border'ını anında kırmızıya çek.
20. **Graceful Degradation:** Canlı API'lerden (Hava durumu, Eczane) veri çekilemediği durumlarda uygulamanın çökmesini engelle, `try-catch` blokları içinde fallback dummy data göster.