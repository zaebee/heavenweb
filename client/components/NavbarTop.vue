<template>
  <b-navbar
    toggleable="lg"
    variant=""
    type="light">
    <b-navbar-brand href="/">
      <b-img
        width="36"
        src="/images/heaven.svg"
        class="d-inline-block align-top"
        alt="heavenweb - разработка и
        сопровождение чат ботов и рекламных компаний"/>
        Heaven.web <span class="d-md-inline d-none">&mdash; дружим с ботами и чатами</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-main-collapse"></b-navbar-toggle>

    <b-collapse id="nav-main-collapse" is-nav>
      <div class="w-100">
        <b-navbar-nav align="right" class="mt-1">
          <b-nav-item class="text-center text-md-left">
            Команда
          </b-nav-item>
          <b-nav-item class="text-center text-md-left">
            Проекты
          </b-nav-item>
          <b-nav-item class="text-center text-md-left">
            Продвижение
          </b-nav-item>
          <b-nav-item class="text-center text-md-left">
            Разработка
          </b-nav-item>
          <b-nav-item class="text-center text-md-left">
            Контакты
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav align="right" class="my-3">
          <b-nav-item
            href="tel:+79535105359"
            class="font-weight-bolder">
           +7 953 510 53 59
          </b-nav-item>
          <b-btn
            variant="subscribe"
            size="sm"
            class="my-2 my-sm-0"
            @click="$emit('show-lead')">
            Обратный звонок
          </b-btn>
        </b-navbar-nav>
      </div>
    </b-collapse>
  </b-navbar>
</template>
