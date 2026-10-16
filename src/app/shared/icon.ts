import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  LucideAngularModule, LucideIconData,
  Briefcase, Activity, ShieldCheck, BookOpen, Server, PanelsTopLeft, Brain, Cloud,
  MessageSquareText, Users, CreditCard, Layers, FileText, ChartLine, Leaf, HeartPulse,
  Trophy, Rocket, Presentation, Lightbulb, Medal, Download, ArrowUpRight, Mail, Phone,
  MapPin, Github, Linkedin, Menu, X, GraduationCap, Award, Sparkles, CodeXml, Calendar,
  ExternalLink, Languages, Send, ArrowUp, CircleCheck,
} from 'lucide-angular';

const ICONS: Record<string, LucideIconData> = {
  briefcase: Briefcase, activity: Activity, shield: ShieldCheck, book: BookOpen,
  server: Server, layout: PanelsTopLeft, brain: Brain, cloud: Cloud,
  message: MessageSquareText, users: Users, card: CreditCard, layers: Layers,
  file: FileText, chart: ChartLine, leaf: Leaf, heart: HeartPulse, trophy: Trophy,
  rocket: Rocket, presentation: Presentation, lightbulb: Lightbulb, medal: Medal,
  download: Download, arrow: ArrowUpRight, mail: Mail, phone: Phone, pin: MapPin,
  github: Github, linkedin: Linkedin, menu: Menu, x: X, grad: GraduationCap,
  award: Award, sparkles: Sparkles, code: CodeXml, calendar: Calendar,
  external: ExternalLink, languages: Languages, send: Send, up: ArrowUp, check: CircleCheck,
};

/** <app-icon name="mail" [size]="18" /> — Lucide icons plus a custom ORCID mark. */
@Component({
  selector: 'app-icon',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-icon' },
  styles: [':host{display:inline-flex;line-height:0}'],
  template: `
    @if (name() === 'orcid') {
      <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zM7.4 17.6H5.9V7.4h1.5v10.2zM6.6 6.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3.3 1h4c3.8 0 5.5 2.7 5.5 5.1 0 2.6-2.1 5.1-5.5 5.1h-4V7.4zm1.5 1.4v7.4h2.4c3.4 0 4.2-2.6 4.2-3.7 0-1.8-1.2-3.7-4.2-3.7h-2.4z"/>
      </svg>
    } @else {
      <lucide-icon [img]="icon()" [size]="size()" [strokeWidth]="stroke()" />
    }
  `,
})
export class Icon {
  name = input.required<string>();
  size = input(20);
  stroke = input(1.8);
  icon = computed(() => ICONS[this.name()] ?? Sparkles);
}
