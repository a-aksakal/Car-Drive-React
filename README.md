# Merhaba

Uygulamada **HomePage.js** sayfası üzerinde açılmaktadır. Bu sayfada `600x600` boyutlarında harita ve bu harita üzerinde konumlanan araç anlık olarak backend tarafından gelen bilgiler doğrultusunda hareketini sağlamakta ve gelen bilgiler sağ tarafta konsolda listelenmektedir.

---

## Render Performansı

    *HomePage componentinde yerleşik olarak harita ve konsol kutusu bulunduğu için bu sayfanın sürekli render edilmesi maliyet açısından olumsuz olacaktı. Bu yüzden bu sayfa, uygulama çalışırken render edilmeyecek şekilde ayarlandı.
    *Car Componenti, HomePage componentine import edilmiş olup, `carPositionAndSpeedChanged`

## Klasör Yapısı

---

### Assets Klasörü

Bu klasörün içinde img klasörü altında yollar ve araç görselleri bulunmaktadır.

---

### Components Klasörü

Bu klasörde her bir component kendi arasında klasörlenmiş olup her bir klasörün içinde ilgili componente ait `.js` dosyası ve `.css` dosyası bulunmaktadır.

Örn: `*components *Car *Car.js *Car.css`

---

### Pages Klasörü

Kullanılacak olan sayfaları belirtmek için bu klasör oluşturulmuştur. Her bir klasörün içinde ilgili sayfanın `.js` dosyası ve `.css` dosyası vardır.

---

### Store Klasörü

**ContextAPI** componentleri bu klasör altında toplanmıştır.
