import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText!: string;
  tooltipContact!: string;
  tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  showTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    const text = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(document.body, this.tooltipElement);

    // Position the tooltip
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    if (this.tooltipElement) {
      const tooltipPos = this.tooltipElement.getBoundingClientRect();
      const top = hostPos.top - tooltipPos.height - 10;
      const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    }
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
  }

  hideTooltip() {
    this.renderer.removeChild(document.body, this.tooltipElement);
  }
}
