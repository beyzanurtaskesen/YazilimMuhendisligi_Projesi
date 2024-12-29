const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1 className="title">Ticaret Sürecimiz</h1>
      <h3 class= "altbaslik" >Verimli ve Güvenli Ticaret Aşamaları </h3>

      <div className="div">
        <p className="text">
         Şirketimiz, uluslararası ve yerel ticaretin her aşamasında verimlilik ve güvenliği ön planda tutarak, müşterilerimize kesintisiz hizmet sunar. Ticaret sürecimiz şu temel aşamalardan oluşur.</p>
    <p class="text">İhtiyaç Analizi ve Danışmanlık: Her müşterimizin ticaret ihtiyaçlarını anlamak için ayrıntılı bir analiz yapar, ithalat ve ihracat süreçleri konusunda uzman danışmanlık hizmetleri sunarız. </p>
    <p class="text"> İthalat ve İhracat Yönetimi: Uluslararası ticaretin gereksinimlerine uygun olarak, gümrükleme ve lojistik süreçlerini profesyonelce yönetiriz. Her iki tarafın da ihtiyaçları doğrultusunda en uygun ve ekonomik çözümleri sunarız.</p>
    <p class="text"> Gümrükleme ve Lojistik: Ticaretin kritik bir aşaması olan gümrükleme süreçlerinde, tüm yasal düzenlemelere uygun hareket eder ve hızlı, güvenli lojistik çözümleriyle teslimatları gerçekleştiririz.</p>
    <p class="text">Şeffaflık ve İzlenebilirlik: Ticaretin her aşamasında, müşterilerimizin süreçleri şeffaf bir şekilde takip edebilmesi için izlenebilirlik sağlar, tüm işlemleri açık bir şekilde sunarız. </p>
    <p class="text"> Destek: Müşterilerimize ithalat ve ihracat süreçlerine ihtiyaç duydukları her an, destek ekibimizden kesintisiz hizmet alabilirler.</p>
    <p class="text">Müşteri Memnuniyeti ve Sürekli İyileştirme: Sürekli gelişim anlayışımızla, ticaret süreçlerini daha verimli ve etkili hale getirmek için geri bildirimlere değer verir, müşteri memnuniyetini her zaman ön planda tutarız. </p>
      </div>
    </div>
  );
}

// React render işlemi
ReactDOM.render(<App />, document.getElementById("root"));