# Merhaba

Uygulamanın amacı `600px x 600px` boyutlarındaki bir harita görseli üzerinde aracın hareketini göstermek ve gelen tüm veri (aşağıda bahsedilmektedir) geçmişini bir **liste** içerisinde tutmaktır. Gösterimlerin **performanslı** olması, **memory leak oluşturmaması** istenmektedir. [Örnek Çıktı](https://streamable.com/u1uol9)

Harita ve araba görsellerini `public/images/` klasöründe bulabilirsiniz. ( Not: Proje içerisinde dilediğiniz yere taşıyabilirsiniz )

---

## Görsel İsteriler:
* Ekranda 600 x 600 boyutlu bir harita yerleştirilmesi
  * Araba bu harita üzerine yerleştirilir
    * Araba'ya bağlı olarak hareket eden hız bilgisi ( Arabanın herhangi bir yerine koyulabilir )
* Ekranın herhangi bir yerinde geçmişte gelmiş tüm eventleri gösteren bir liste oluşturulması
* Hız değişimini sağlayan bir buton

### Artı Olarak Değerlendirilecekler:
* Componentlerin performanslı şekilde renderlanması, render maliyetlerinin düşük olması
* Componentlerin stillendirilmesi

---

## Teknik İsteriler:
* **React 18** kurallarına uygun olarak hazırlanması
* React hook'larının kullanılması
* Projenin github üzerinden gönderilmesi

### Artı Olarak Değerlendirilecekler:
* Render maliyetini düşürecek performans çözümleri
* Eslint kullanımı ( Airbnb standart kuralları )
* Context api kullanımı ( useState ile yapılabilecek olsa bile )
* Unit test hazırlanması ( Jest ile )
* Context api kullanımı
* Componentlerin parçalara ve dosyalara bölünmesi
* BDD testleri hazırlanması
* Modüler css yada modüler scss kullanılması
* Storybook kullanımı
* Typescript kullanımı

---

Uygulamanın veri sağlayıcısı `src/backend/index.ts` dosyasıdır. Nasıl kullanılacağının bilgileri dosyanın ilerleyen bölümlerinde bulunmaktadır.

Proje `typescript` ile `create-react-app (CRA)` kullanılarak başlatılmıştır. `Typescript` ile devam etmek istemediğiniz durumda `.js veya .jsx` uzantılı dosyalar oluşturabilir, dosyaları javascript'e çevirip devam edebilir, ( Tür tanımlarını kaldırmanız gerekmektedir. ) yada webpack gibi bir bundler ile tamamen özelleştirilmiş yeni bir proje de oluşturabilirsiniz.

Not: Backend aynı şekilde çalışmalıdır, çalışma şekline müdahale etmeyiniz.

---

## Başlarken

Proje içerisindeki `src/index.tsx` dosyasına istediğiniz react component'ini mount ediniz.

Backend/index.ts dosyasını backend'e bağlanacak sayfaya dahil ediniz. Örneğin:
```typescript
import backend from '../backend';
```

Aracın başlangıç durumunu almak ve sistemi başlatmak için aşağıdaki komutu kullanınız:
```typescript
interface CarPosition {
    x: number; // Araba'nın resim üzerindeki x konumu ( araba görselinin sol üst köşesinin konumu )
    y: number; // Araba'nın resim üzerindeki y konumu ( araba görselinin sol üst köşesinin konumu )
    orientation: number; // Arabanın yönü ( -180 ve +180 derece aralığında )
}

interface CarPositionAndSpeedLevel {
    carPosition: CarPosition;
    speedLevel: number;
}

getInitialCarPositionAndSpeed(): Promise<CarPositionAndSpeedLevel>;
```

üstteki komut tamamlandıktan sonra eventler tetiklenmeye başlayacaktır. ( Not: Üstteki komutu 1 defa kullanmanız gerekmektedir )

Event'lerin tetiklenmesini takip etmek için ve takipten ayrılmak için aşağıdaki komutları kullanabilirsiniz:

```typescript
const sampleHandler = ({detail}) => { console.log(detail); }

// Event dinlemeyi başlatmak için:
document.addEventListener('carPositionAndSpeedChanged', sampleHandler);

// Event dinlemeyi bırakmak için:
document.removeEventListener('carPositionAndSpeedChanged', sampleHandler);
```

### Metod Listesi

> **ChangeSpeed(): Promise<void\>**
> 
> Bir süre bekledikten sonra aracın hızını değiştirir.
> 
> Araç hızı değiştikten sonra promise resolve olur.
> 
> Ayrıca araç hızının değiştiği bilgisi **speedLevelChanged** eventi ile de gönderilir.

```typescript
changeSpeed(): Promise<void>;
```

---

> **getInitialCarPositionAndSpeed(): Promise<CarPositionAndSpeedLevel>**

```typescript
interface CarPosition {
    x: number; // Araba'nın resim üzerindeki x konumu ( araba görselinin sol üst köşesinin konumu )
    y: number; // Araba'nın resim üzerindeki y konumu ( araba görselinin sol üst köşesinin konumu )
    orientation: number; // Arabanın yönü ( -180 ve +180 derece aralığında )
}

interface CarPositionAndSpeedLevel {
    carPosition: CarPosition;
    speedLevel: number;
}

getInitialCarPositionAndSpeed(): Promise<CarPositionAndSpeedLevel>;
```


### Event Listesi

> **speedLevelChanged**
> 
> Bu event hız değiştirme komutundan rastgele bir süre sonra tetiklenir. Şu anki hız seviyesi buradan event ile okunabilir.

```typescript
enum CarSpeedLevel {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3,
}

// Event dinleyicisinin ilk parametresinde gelecek veri türüdür.
interface SpeedLevelChangedEvent {
    detail: {
        speedLevel: CarSpeedLevel;
    };
}
```

---

> **carPositionAndSpeedChanged**
>
> Bu event arabanın lokasyonu değiştiğinde gönderilir. Sistem başladıktan sonra sürekli olarak gönderilecektir.
> 
> Bu event'ten gelen veriler geçmiş olaylar listesine de eklenmelidir JSON.stringify() ile koyabilirsiniz.

```typescript
interface CarPosition {
    x: number; // Araba'nın resim üzerindeki x konumu ( araba görselinin sol üst köşesinin konumu )
    y: number; // Araba'nın resim üzerindeki y konumu ( araba görselinin sol üst köşesinin konumu )
    orientation: number; // Arabanın yönü ( -180 ve +180 derece aralığında )
}

// Event dinleyicisinin ilk parametresinde gelecek veri türüdür.
interface SpeedLevelChangedEvent {
    detail: {
        carPosition: CarPosition;
        speed: number;
    };
}
```



