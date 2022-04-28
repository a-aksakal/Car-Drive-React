# Merhaba

Uygulamada **HomePage.js** sayfası üzerinde açılmaktadır. Bu sayfada `600x600` boyutlarında harita ve bu harita üzerinde konumlanan araç anlık olarak backend tarafından gelen bilgiler doğrultusunda hareketini sağlamakta ve gelen bilgiler sağ tarafta konsolda listelenmektedir.

Araç hareketine başladıktan sonra kavşağa geldiğinde dönüş hareketine başlarken araç başa dönüyordu. Araç bilgileri `constants.ts` dosyasından geliyor. O dosyayı kontrol ettiğimde gelen son araç bilgisinin tam işaret ettiğim noktada bittiğini farkettim. Bu yüzden [Örnek](https://streamable.com/u1uol9) gibi olması için constants.ts dosyasına araç hareketini tamamlayacak şekilde verileri dahil ettim.

---

## Render Performansı:

- **HomePage componentinde** yerleşik olarak harita ve konsol kutusu bulunduğu için bu sayfanın sürekli render edilmesi maliyet açısından olumsuz olacaktı. Bu yüzden bu sayfa, uygulama çalışırken render edilmeyecek şekilde ayarlandı.

- Bütün state değişiklikleri `Consol componenti` üzerinden yönetilmiştir. Car componentinde bu state değişikliklerinin yönetilmesinin render süresine olumsuz etkisi olacağını düşündüm ve react dev tools üzerinden profiler ile kontrol ettiğimde bu şekilde yapmayı tercih ettim.

- Uygulamanın çalıştığı her saniye tarayıcının kaynak tüketimi oldukça artıyordu. Bunun sebebi `carPositionAndSpeedChanged` eventinden gelen bilgilerin `CarPositionAndSpeed` state dizisine kaydedilip ve bu dizinin Consol componentinde map methoduyla her bir elemanın sayfada listelenmesinden kaynaklanıyordu. Oluşan bu memory leak durumunu engellemek için araç hareketini her tamamladığında konsoldaki bilgileri sıfırladım. Bunu da Consol componentinde eventi dinlerken if else karar yapısıyla aracın x ve y bilgisini kontrol ederek yönettim.

---

```javascript
const carDetailHandler = ({ detail }) => {
  setPositionX(detail.carPosition.x);

  setPositionY(detail.carPosition.y);

  setRotate(detail.carPosition.orientation);

  setSpeed(detail.speed);

  //Aracın hareketini tamamlayıp tamamlamadığını kontrol eden yapı
  if (detail.carPosition.x === 285 && detail.carPosition.y === 415) {
    setCarPositionAndSpeed([]);
  } else {
    setCarPositionAndSpeed([...carPositionAndSpeed, detail]);
  }
};
```

---

- **Car Componenti**, HomePage componentine import edilmiş olup, `carPositionAndSpeedChanged` eventinden gelen bilgiler doğrultusunda harita üzerinde hareket etmesi gerekiyordu. Bu yüzden contextAPI kullanılarak x,y ve orientation bilgileri state ile yönetilmiş olup her gelen posizyon bilgisinde bu durum statelere bağlanarak yönetilmiştir. Her state değişikliğinde Car componenti render olarak style kısmında left kısmına x, top kısmına y, rotate kısmına orientation değerleri eklenmektedir.

---

## Klasör Yapısı

---

### Assets Klasörü

- Bu klasörün içinde img klasörü altında yollar ve araç görselleri bulunmaktadır.

---

### Components Klasörü

- Bu klasörde her bir component kendi arasında klasörlenmiş olup her bir klasörün içinde ilgili componente ait `.js` dosyası ve `.css` dosyası bulunmaktadır.

- Örn:
  - components
    - Car
      - Car.js
      - Car.css

---

### Pages Klasörü

- Kullanılacak olan sayfaları belirtmek için bu klasör oluşturulmuştur. Her bir klasörün içinde ilgili sayfanın `.js` dosyası ve `.css` dosyası vardır.

---

### Store Klasörü

- **ContextAPI** componentleri bu klasör altında toplanmıştır.

```

```
