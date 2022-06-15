<page
  format="A4"
  orientation="P"
  backtop="10mm"
  backbottom="10mm"
  backleft="10mm"
  backright="10mm"
>
  <style>
    /* config */
    * {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }
    /* end config */

    /* start header */
   

    .header-section .header-content  {
      margin-left: 200pt;
      font-size: 8pt;
      margin-bottom: 300pt;
    }

    /* logo */

    img {
      width: 20mm;
      
    }
    /*  end header*/

    /* start showcase */
    .showcase .showcase-content {
      text-align: justify;
      margin-bottom: 50pt;
      font-size: 13pt;
      margin-top: 40pt;
      line-height: 20pt;
    }
    .showcase p {
      font-weight: bold;
      margin-top: 40pt;
    }
    .showcase .date {
      margin-top: 2pt;
      margin-bottom: 15pt;
    }
    .showcase .date h4 {
      margin-bottom: 1pt;
    }

    /* line */
    .line-1 {
      width: 30%;
      border-bottom: 1pt solid #000;
      height: 30pt;
    }
    .line-2 {
      width: 80%;
      border-bottom: 1pt solid #000;
      height: 20pt;
      margin-bottom: 10pt;
    }
    .line-3 {
      width: 30%;
      border-bottom: 1pt solid #000;
      height: 100pt;

    }
     
    .datum{
      margin-left: 300pt;
      
    }
    .datum-1{
      margin-left: 370pt;
      margin-top: 20pt;
    }
 
    /* end showcase */

    /* footer */

    /* footer */
  </style>

  <!-- start header -->
  <div class="header-section">
   
      <img
        src="data:image/png;base64,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"
      />

    <span class="header-content">
      Für Landratsamt und Kfz-Zulassungsstelle Ludwigsburg
    </span>
  </div>
  <!-- end header -->

  <!-- showcase -->

  <div class="showcase">
    <h1 class="showcase-content">
      EINVERSTÄNDNISERKLÄRUNG ZUR DOKUMENTENÜBERGABE ÜBER <br />SMART-TERMINAL
    </h1>
    <h4>Empfänger</h4>
    <div class="line-1"></div>

    <p>Wünscht die Übergabe von Dokumenten über den Smart-Terminal.</p>

    <div class="date">
      <h4>ID: {{reservation.id}}</h4>
      <h4>
        {{reservation.begin|date('d.m.Y H:i')|raw}} -
        {{reservation.end|date('d.m.Y H:i')|raw}}
      </h4>
    </div>

    <div class="line-2"></div>
    <div class="flex-1">
      <span>Beschreibung</span>
      <span class="datum">
        <span> Datum</span>
        <div class="datum-1"> {{"now"|date('d.m.Y')|raw}}</div>
       
      </span>

    </div>
  </div>

  <!-- end showcase -->

  <!-- footer -->
  <div>
    <div class="line-3"></div>
    <h4 class="footer-unter">Unterschrift Empfänger</h4>

    <div class="barcode">
      <qrcode
        value="{{reservation.openingTAN2}}"
        ec="H"
        style="
          width: 23mm;
          margin: 2pt;
          background-color: white;
          color: black;
          border: none;
        "
      ></qrcode>
      <h4 class="barcode-span">PIN {{reservation.openingTAN2}}</h4>
    </div>
  </div>
  <!-- end footer -->
</page>

<!-- page two -->

<page
  format="A4"
  orientation="P"
  backtop="10mm"
  backbottom="10mm"
  backleft="10mm"
  backright="10mm"
>
  <style>
   .header-section .header-content-1  {
      margin-left: 300pt;
      font-size: 8pt;
      margin-bottom: 300pt;
    }

    .datum{
      margin-left: 300pt;
      
    }
    .datum-1{
      margin-left: 370pt;
      margin-top: 20pt;
    }
  </style>

  <!-- start header -->
  <div class="header-section">
   
    <img
      src="data:image/png;base64,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"
    />

  <span class="header-content-1">
    Für Empfänger
  </span>
</div>
  <!-- end header -->

  <!-- showcase -->

  <div class="showcase">
    <h1 class="showcase-content">
      EINVERSTÄNDNISERKLÄRUNG ZUR DOKUMENTENÜBERGABE ÜBER <br />SMART-TERMINAL
    </h1>
    <h4>Empfänger</h4>
    <div class="line-1"></div>

    <div class="date">
      <h4>ID: {{ reservation.id }}</h4>
      <h4>03.12.2012 - 04.12.2021 11:35</h4>
    </div>

    <div class="line-2"></div>
    <div class="flex-1">
      <span>Beschreibung</span>
      <span class="datum">
        <span> Datum</span>
        <div class="datum-1"> {{"now"|date('d.m.Y')|raw}}</div>
       
      </span>

    </div>
  </div>

  <div class="lead">
    <p>
      Nachstehend finden Sie Ihren Abholcode als QR-Code und Zahlencode. Bitte
      scannen Sie den QR-Code am Smart-Terminal oder geben Sie den Zahlencode
      manuell über den Touchscreen der Anlage ein.
    </p>
    <p>
      Entnehmen Sie Ihre Unterlagen und schließen Sie anschließend die
      Schließfachtür.
    </p>
  </div>

  <!-- end showcase -->

  <!-- footer -->
  <div>
    <div class="line-3"></div>
    <h4 class="footer-unter">Unterschrift Empfänger</h4>

    <div class="barcode">
      <qrcode
        value="{{reservation.openingTAN}}"
        ec="H"
        style="
          width: 23mm;
          margin: 2pt;
          background-color: white;
          color: black;
          border: none;
        "
      ></qrcode>
      <h4 class="barcode-span">PIN {{reservation.openingTAN}}</h4>
    </div>
  </div>
  <!-- end footer -->
</page>