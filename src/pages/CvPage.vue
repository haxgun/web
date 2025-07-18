<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Download } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n<{ locale: string }>()
const localStorageLocale = useLocalStorage<string>('cvLocale', 'en')

async function toggleLanguage(): Promise<void> {
  locale.value = locale.value === 'en' ? 'ru' : 'en'
  localStorageLocale.value = locale.value
}

async function downloadPDF(): Promise<void> {
  const element = document.querySelector('#cv') as HTMLElement
  if (!element) return

  const canvas = await html2canvas(element, {
    scale: 2,
    scrollX: 0,
    scrollY: 0,
    useCORS: true,
  })

  const imgData = canvas.toDataURL('image/png')

  const pdfWidth = 210
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width

  const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight])
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)

  pdf.save('resume.pdf')
}
</script>

<template>
  <div class="page-cv">
    <div class="inline-flex gap-1 fixed top-5 right-5 bg-neutral-200/25 rounded-xl p-1.5">
      <button
        id="lang"
        @click="toggleLanguage"
        class="rounded-lg hover:bg-neutral-200/50 hover:text-zinc-700 transition-colors duration-200 capitalize flex flex-col items-center justify-center size-10"
      >
        <span v-if="localStorageLocale == 'ru'" class="fi fi-ru" />
        <span v-else class="fi fi-us" />
      </button>
      <button
        @click="downloadPDF"
        class="text-sm rounded-lg hover:bg-neutral-200/50 hover:text-zinc-700 dark:hover:text-white transition-colors duration-200 capitalize inline-flex gap-2 items-center justify-center p-2"
      >
        <Download :size="16" />
        {{ $t('downloadPDF') }}
      </button>
    </div>
    <div id="cv" class="cv">
      <header>
        <section class="info">
          <h1>{{ $t('name') }}</h1>
          <h2>{{ $t('profession') }}</h2>
          <p>{{ $t('age') }}</p>
        </section>
        <section class="contact">
          <p>
            <strong>{{ $t('contact.email') }}: </strong>
            <a href="mailto:haxgun@vk.com">misha@valory.su</a> — {{ $t('contact.preferred') }}
          </p>
          <p>
            <strong>{{ $t('contact.phone') }}:</strong> +7 (963) 882 14-38
          </p>
          <p>
            <strong>{{ $t('contact.telegram') }}:</strong> <a href="https://t.me/haxgun">@haxgun</a>
          </p>
          <p>
            <strong>{{ $t('contact.github') }}: </strong>
            <a href="https://github.com/haxgun">github.com/haxgun</a>
          </p>
          <p>
            <strong>{{ $t('contact.website') }}:</strong> <a href="https://haxgun.ru">haxgun.ru</a>
          </p>
          <p>
            <strong>{{ $t('contact.city') }}</strong>
          </p>
        </section>
      </header>
      <div class="container">
        <div class="left">
          <section class="about">
            <p v-html="$t('about')"></p>
          </section>
          <section class="experience">
            <h3>{{ $t('experience.title') }}</h3>
            <div class="job">
              <h4>{{ $t('experience.news_autopost.company') }}</h4>
              <h5>{{ $t('experience.news_autopost.duration') }}</h5>
              <ul>
                <li>{{ $t('experience.news_autopost.tasks[0]') }}</li>
                <li>{{ $t('experience.news_autopost.tasks[1]') }}</li>
                <li>{{ $t('experience.news_autopost.tasks[2]') }}</li>
              </ul>
            </div>
            <div class="job">
              <h4>{{ $t('experience.wb_telegram_bot.company') }}</h4>
              <h5>{{ $t('experience.wb_telegram_bot.duration') }}</h5>
              <ul>
                <li>{{ $t('experience.wb_telegram_bot.tasks[0]') }}</li>
                <li>{{ $t('experience.wb_telegram_bot.tasks[1]') }}</li>
                <li>{{ $t('experience.wb_telegram_bot.tasks[2]') }}</li>
              </ul>
            </div>
            <div class="job">
              <h4>{{ $t('experience.monitoring_chat_bot.company') }}</h4>
              <h5>{{ $t('experience.monitoring_chat_bot.duration') }}</h5>
              <ul>
                <li>{{ $t('experience.monitoring_chat_bot.tasks[0]') }}</li>
                <li>{{ $t('experience.monitoring_chat_bot.tasks[1]') }}</li>
                <li>{{ $t('experience.monitoring_chat_bot.tasks[2]') }}</li>
              </ul>
            </div>
            <div class="job">
              <h4>{{ $t('experience.valory.company') }}</h4>
              <h5>{{ $t('experience.valory.duration') }}</h5>
              <ul>
                <li>{{ $t('experience.valory.tasks[0]') }}</li>
                <li>{{ $t('experience.valory.tasks[1]') }}</li>
                <li>{{ $t('experience.valory.tasks[2]') }}</li>
              </ul>
            </div>
            <div class="job">
              <h4>{{ $t('experience.discordBot.company') }}</h4>
              <h5>{{ $t('experience.discordBot.duration') }}</h5>
              <ul>
                <li>{{ $t('experience.discordBot.tasks[0]') }}</li>
                <li>{{ $t('experience.discordBot.tasks[1]') }}</li>
                <li>{{ $t('experience.discordBot.tasks[2]') }}</li>
              </ul>
            </div>
          </section>
          <section class="education">
            <h3>{{ $t('education.title') }}</h3>
            <div class="item">
              <h4>
                <strong>{{ $t('education.degree') }}</strong>
              </h4>
              <h4>{{ $t('education.university') }}</h4>
              <h5>{{ $t('education.period') }}</h5>
            </div>
          </section>
          <section class="courses">
            <h3>{{ $t('courses.title') }}</h3>
            <div class="item">
              <h4>
                <strong>{{ $t('courses.items[0].name') }}</strong>
              </h4>
              <h4>
                {{ $t('courses.items[0].organization') }}
              </h4>
            </div>
            <div class="item">
              <h4>
                <strong>{{ $t('courses.items[1].name') }}</strong>
              </h4>
              <h4>
                {{ $t('courses.items[1].organization') }}
              </h4>
            </div>
          </section>
        </div>
        <div class="right">
          <section class="skills">
            <h3>{{ $t('skills.title') }}</h3>
            <ul>
              <li>{{ $t('skills.items[0]') }}</li>
              <li>{{ $t('skills.items[1]') }}</li>
              <li>{{ $t('skills.items[2]') }}</li>
              <li>{{ $t('skills.items[3]') }}</li>
            </ul>
          </section>
          <section class="languages">
            <h3>{{ $t('languages.title') }}</h3>
            <ul>
              <li>{{ $t('languages.items[0]') }}</li>
              <li>{{ $t('languages.items[1]') }}</li>
            </ul>
          </section>
          <section class="tools">
            <h3>{{ $t('tools.title') }}</h3>
            <ul>
              <li>{{ $t('tools.items[0]') }}</li>
              <li>{{ $t('tools.items[1]') }}</li>
              <li>{{ $t('tools.items[2]') }}</li>
              <li>{{ $t('tools.items[3]') }}</li>
              <li>{{ $t('tools.items[4]') }}</li>
              <li>{{ $t('tools.items[5]') }}</li>
              <li>{{ $t('tools.items[6]') }}</li>
              <li>{{ $t('tools.items[7]') }}</li>
              <li>{{ $t('tools.items[8]') }}</li>
            </ul>
          </section>
          <section class="hobbies">
            <h3>{{ $t('hobbies.title') }}</h3>
            <ul>
              <li>{{ $t('hobbies.items[0]') }}</li>
              <li>{{ $t('hobbies.items[1]') }}</li>
              <li>{{ $t('hobbies.items[2]') }}</li>
              <li>{{ $t('hobbies.items[3]') }}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html.dark > .cv {
  color: #ffffff;
}

.cv {
  font-family: 'Geist Variable';
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  line-height: 1.6;
  font-size: 16px;
  color: #121212;
  padding: 40px 60px;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 40px;

  header {
    text-align: left;
    margin-bottom: 30px;

    p {
      font-size: 13.6px; // 0.85em
      margin: 5px 0 0 0;
    }

    section {
      margin-top: 30px;
    }

    .contact {
      p,
      section p {
        font-size: 18px; // 1em
        line-height: 24px;
        margin: 5px 0;

        strong {
          font-weight: 600;
        }
      }

      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: 570px 250px;
    grid-template-rows: auto;
    grid-template-areas: '.left .right';
    grid-gap: 50px;

    .left {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 31px;
      display: flex;

      flex-direction: column;
      gap: 42px;

      p {
        margin: 0;
      }

      .experience {
        display: flex;
        flex-direction: column;
        gap: 24px;

        h3 {
          font-size: 21px; // 1.3em
          font-style: normal;
          font-weight: 700;
          line-height: normal;

          margin: 0;
          padding: 0;
        }

        h4 {
          font-size: 21px; // 1.3em
          font-style: normal;
          font-weight: 700;
          line-height: normal;

          margin: 0;
          padding: 0;
        }

        h5 {
          font-size: 12px; // 0.75em
          font-style: italic;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.16px;
          text-transform: uppercase;

          margin: 8px 0 0 0;
          padding: 0;
        }

        ul {
          margin: 12px 0 0 0;
          line-height: 32px;
          color: #454545;
          padding: 0 0 0 18px;

          li {
            position: relative;
            font-size: 18px; // 1em
          }
          li::after {
            position: absolute;
            top: -9px;
            left: -20px;
            content: '-';
            display: block;
            margin-top: 8px;
          }
        }
      }

      .courses,
      .education {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        h3 {
          font-size: 21px; // 1.3em
          font-style: normal;
          font-weight: 700;
          line-height: normal;

          margin: 0;
          padding: 0;
        }

        h4 {
          font-size: 21px; // 1.3em
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          margin: 0;
          padding: 0;
        }

        h5 {
          font-size: 14px;
          font-style: italic;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.16px;
          text-transform: uppercase;

          margin: 8px 0 0 0;
          padding: 0;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 28px;

      h3 {
        font-size: 21px; // 1.3em
        padding: 0;
        margin: 0;
      }

      ul {
        margin: 12px 0;
        line-height: 32px;
        color: #454545;
        padding-left: 18px;

        li {
          position: relative;
          font-size: 16px;
          padding-bottom: 5px; // 1em
        }
        li::after {
          position: absolute;
          top: -9px;
          left: -20px;
          content: '-';
          display: block;
          margin-top: 8px;
        }
      }
    }
  }

  h1 {
    font-size: 41.6px; // 2.6em
    font-weight: bold;
    margin: 0;
    height: 1.4em;
  }

  h2 {
    font-size: 21px; // 1.3em
    font-weight: normal;
    margin: 0;
  }

  section {
    h3 {
      font-size: 22.4px; // 1.4em
      font-weight: bold;
      margin-bottom: 15px;
      display: inline-block;
      padding-bottom: 5px;
    }

    &.job {
      h4 {
        font-size: 17.6px; // 1.1em
        font-weight: bold;
        margin: 10px 0 5px;
        color: #121212;
      }

      ul {
        margin-left: 20px;
        list-style: disc;

        li {
          margin: 5px 0;
        }
      }
    }

    &.education,
    &.courses {
      p,
      ul li {
        font-size: 15.2px; // 0.95em
      }
    }

    &.languages,
    &.tools,
    &.hobbies {
      font-size: 15.2px; // 0.95em
    }
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
