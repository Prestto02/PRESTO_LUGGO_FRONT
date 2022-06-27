import { HookParserEntry } from 'ngx-dynamic-hooks';
import { PagarComponent } from '../pagar.component';
/**
 * This array is used to register and configure the active hook parsers
 */
export const componentParsers: Array<HookParserEntry> = [
  {
    component: PagarComponent,
  },
];
