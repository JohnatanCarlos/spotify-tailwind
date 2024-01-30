import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Library,
  LucideAngularModule,
  Play,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
  PauseCircle,
  Repeat,
  Mic2,
  MonitorSmartphone,
  Rows3,
  Volume2
} from 'lucide-angular';

import { routes } from './app.routes';

const ICONS = {
  Home,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  PauseCircle,
  SkipForward,
  Repeat,
  Mic2,
  MonitorSmartphone,
  Rows3,
  Volume2
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick(ICONS)
    ),
  ],

};
