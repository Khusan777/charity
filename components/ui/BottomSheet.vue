<template>
  <div
    id="offcanvasBottom"
    style="height: 90%"
    class="offcanvas offcanvas-bottom rounded-top-4"
    tabindex="-1"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div style="padding: 20px 20px 0" class="offcanvas-header">
      <h5 id="offcanvasBottomLabel" class="offcanvas-title">
        Краткое описание
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="subtitle">Дефект межпредсердной перегородки</div>
    <div class="offcanvas-body">
      <div class="info">
        <div style="padding-bottom: 10px; padding-top: 15px">
          Дефект межпредсердной перегородки (Atrial septal defect)— это
          врождённый порок сердца, при котором в межпредсердной перегородке
          образуется отверстие. Через него кровь поступает из левого предсердия
          в правое, из-за чего сосуды лёгких получают больше крови, чем нужно.
        </div>
        <div style="padding-bottom: 7px">
          Дефект межпредсердной перегородки (ДМПП) составляет примерно 7 % от
          всех врождённых пороков сердца и является одним из самых частых
          пороков у детей старше 3 лет.
        </div>
        <NuxtImg
          style="
            text-align: center;
            mix-blend-mode: darken;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
          src="/images/disease.png"
          alt="disease"
        ></NuxtImg>
        <div style="padding-top: 10px; padding-bottom: 20px">
          Дефект межпредсердной перегородки (ДМПП) составляет примерно 7 % от
          всех врождённых пороков сердца и является одним из самых частых
          пороков у детей старше 3 лет. ДМПП часто протекает бессимптомно,
          поэтому может долго оставаться незамеченным. У некоторых пациентов
          этот дефект может приводить к одышке и быстрой утомляемости при
          физической нагрузке. Также родители детей с ДМПП указывают на частые
          респираторные заболевания, умеренную задержку физического развития и
          повышенную потливость у ребёнка. С возрастом могут появиться жалобы на
          перебои в работе сердца (аритмии). ДМПП могут различаться размерами,
          формой и расположением. Дефекты могут располагаться в разных отделах
          межпредсердной перегородки, а по размеру бывают как совсем маленькими,
          так и очень большими, вплоть до полного отсутствия перегородки, т. е.
          объединения двух предсердий в одно.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.offcanvas {
  & .offcanvas-body {
    padding: 0 20px;
  }
  & .subtitle {
    padding: 0 20px;
    font-weight: 400;
    font-size: 12px;
    color: #363845;
  }
  & .info {
    font-weight: 400;
    font-size: 12px;
    color: #6a6a6a;
  }
}
</style>
