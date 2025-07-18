import { GithubIcon, TelegramIcon, TwitchIcon, XIcon } from '@/components/icons/socials'
import { type Contact } from '@/types/contacts'
import { MailIcon } from 'lucide-vue-next'

export const ContactsData: Contact[] = [
  {
    url: 'mailto:misha@valory.su',
    tag: 'misha@valory.su',
    name: 'Почта',
    color: '#007bff',
    dark_color: '#007bff',
    icon: MailIcon,
  },
  {
    url: 'https://github.com/haxgun',
    tag: '@haxgun',
    name: 'Github',
    color: '#6c757d',
    dark_color: '#6c757d',
    icon: GithubIcon,
  },
  {
    url: 'http://t.me/haxgun',
    tag: '@haxgun',
    name: 'Telegram',
    color: '#24A1DE',
    dark_color: '#24A1DE',
    icon: TelegramIcon,
  },
  {
    url: 'https://twitch.tv/magicxcmd',
    tag: '@MAGICXcmd',
    name: 'Twitch',
    color: '#9146ff',
    dark_color: '#9146ff',
    icon: TwitchIcon,
  },
  {
    url: 'https://x.com/haxguno',
    tag: '@haxguno',
    name: 'X',
    color: '#000000',
    dark_color: '#ffffff',
    icon: XIcon,
  },
]
