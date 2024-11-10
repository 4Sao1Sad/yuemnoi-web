import dynamic from 'next/dynamic';
import * as React from "react";

import { cn } from "@yuemnoi/lib/utils/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = dynamic(() => import('./textarea').then(mod => mod.Textarea), { ssr: false });

Textarea.displayName = "Textarea";

export { Textarea };
