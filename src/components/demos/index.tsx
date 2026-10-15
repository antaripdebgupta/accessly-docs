"use client";

import type { ComponentType } from "react";
import { ButtonDemo, buttonDemoCode, buttonStories } from "./ButtonDemo";
import { SwitchDemo, switchDemoCode, switchStories } from "./SwitchDemo";
import { CheckboxDemo, checkboxDemoCode, checkboxStories } from "./CheckboxDemo";
import { InputDemo, inputDemoCode, inputStories } from "./InputDemo";
import { TextareaDemo, textareaDemoCode, textareaStories } from "./TextareaDemo";
import { RadioGroupDemo, radioGroupDemoCode, radioGroupStories } from "./RadioGroupDemo";
import { PaginationDemo, paginationDemoCode, paginationStories } from "./PaginationDemo";
import { ComboboxDemo, comboboxDemoCode, comboboxStories } from "./ComboboxDemo";
import { DialogDemo, dialogDemoCode, dialogStories } from "./DialogDemo";
import {
  DropdownMenuDemo,
  dropdownMenuDemoCode,
  dropdownMenuStories,
} from "./DropdownMenuDemo";
import { TooltipDemo, tooltipDemoCode, tooltipStories } from "./TooltipDemo";
import {
  CommandPaletteDemo,
  commandPaletteDemoCode,
  commandPaletteStories,
} from "./CommandPaletteDemo";
import { BreadcrumbDemo, breadcrumbDemoCode, breadcrumbStories } from "./BreadcrumbDemo";
import { TabsDemo, tabsDemoCode, tabsStories } from "./TabsDemo";
import { TreeViewDemo, treeViewDemoCode, treeViewStories } from "./TreeViewDemo";
import { AlertDemo, alertDemoCode, alertStories } from "./AlertDemo";
import { SkeletonDemo, skeletonDemoCode, skeletonStories } from "./SkeletonDemo";
import { ToastDemo, toastDemoCode, toastStories } from "./ToastDemo";
import { AvatarDemo, avatarDemoCode, avatarStories } from "./AvatarDemo";
import { DataTableDemo, dataTableDemoCode, dataTableStories } from "./DataTableDemo";
import { AccordionDemo, accordionDemoCode, accordionStories } from "./AccordionDemo";
import { CarouselDemo, carouselDemoCode, carouselStories } from "./CarouselDemo";

export interface DemoStory {
  title: string;
  Demo: ComponentType;
  code: string;
}

export interface DemoEntry {
  Demo: ComponentType;
  code: string;
  importCode: string;
  stories: DemoStory[];
}

export const demoRegistry: Record<string, DemoEntry> = {
  button: {
    Demo: ButtonDemo,
    code: buttonDemoCode,
    importCode: 'import { Button } from "@accessly-ui/react";',
    stories: buttonStories,
  },
  switch: {
    Demo: SwitchDemo,
    code: switchDemoCode,
    importCode: 'import { Switch } from "@accessly-ui/react";',
    stories: switchStories,
  },
  checkbox: {
    Demo: CheckboxDemo,
    code: checkboxDemoCode,
    importCode: 'import { Checkbox } from "@accessly-ui/react";',
    stories: checkboxStories,
  },
  input: {
    Demo: InputDemo,
    code: inputDemoCode,
    importCode:
      'import { Input, InputGroup, FieldGroup, FileInput } from "@accessly-ui/react";',
    stories: inputStories,
  },
  textarea: {
    Demo: TextareaDemo,
    code: textareaDemoCode,
    importCode: 'import { Textarea } from "@accessly-ui/react";',
    stories: textareaStories,
  },
  "radio-group": {
    Demo: RadioGroupDemo,
    code: radioGroupDemoCode,
    importCode: 'import { RadioGroup, RadioGroupItem } from "@accessly-ui/react";',
    stories: radioGroupStories,
  },
  "command-palette": {
    Demo: CommandPaletteDemo,
    code: commandPaletteDemoCode,
    importCode:
      'import { CommandPalette, CommandInput, CommandList, CommandGroup, CommandItem, CommandEmpty, CommandLoading, CommandShortcut } from "@accessly-ui/react";',
    stories: commandPaletteStories,
  },
  pagination: {
    Demo: PaginationDemo,
    code: paginationDemoCode,
    importCode: 'import { Pagination } from "@accessly-ui/react";',
    stories: paginationStories,
  },
  combobox: {
    Demo: ComboboxDemo,
    code: comboboxDemoCode,
    importCode:
      'import { Combobox, ComboboxInput, ComboboxTags, ComboboxContent, ComboboxItem, ComboboxGroup, ComboboxEmpty } from "@accessly-ui/react";',
    stories: comboboxStories,
  },
  dialog: {
    Demo: DialogDemo,
    code: dialogDemoCode,
    importCode:
      'import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from "@accessly-ui/react";',
    stories: dialogStories,
  },
  "dropdown-menu": {
    Demo: DropdownMenuDemo,
    code: dropdownMenuDemoCode,
    importCode:
      'import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from "@accessly-ui/react";',
    stories: dropdownMenuStories,
  },
  "tree-view": {
    Demo: TreeViewDemo,
    code: treeViewDemoCode,
    importCode: 'import { TreeView, TreeItem } from "@accessly-ui/react";',
    stories: treeViewStories,
  },
  tooltip: {
    Demo: TooltipDemo,
    code: tooltipDemoCode,
    importCode:
      'import { Tooltip, TooltipTrigger, TooltipContent } from "@accessly-ui/react";',
    stories: tooltipStories,
  },
  breadcrumb: {
    Demo: BreadcrumbDemo,
    code: breadcrumbDemoCode,
    importCode:
      'import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from "@accessly-ui/react";',
    stories: breadcrumbStories,
  },
  tabs: {
    Demo: TabsDemo,
    code: tabsDemoCode,
    importCode:
      'import { Tabs, TabsList, TabsTrigger, TabsContent } from "@accessly-ui/react";',
    stories: tabsStories,
  },
  alert: {
    Demo: AlertDemo,
    code: alertDemoCode,
    importCode: 'import { Alert } from "@accessly-ui/react";',
    stories: alertStories,
  },
  skeleton: {
    Demo: SkeletonDemo,
    code: skeletonDemoCode,
    importCode:
      'import { Skeleton, SkeletonGroup, SkeletonAvatar, SkeletonText, SkeletonCard, SkeletonForm, SkeletonTable } from "@accessly-ui/react";',
    stories: skeletonStories,
  },
  toast: {
    Demo: ToastDemo,
    code: toastDemoCode,
    importCode: 'import { ToastProvider, useToast } from "@accessly-ui/react";',
    stories: toastStories,
  },
  avatar: {
    Demo: AvatarDemo,
    code: avatarDemoCode,
    importCode:
      'import { Avatar, AvatarGroup, AvatarStatusBadge, AvatarDropdown } from "@accessly-ui/react";',
    stories: avatarStories,
  },
  "data-table": {
    Demo: DataTableDemo,
    code: dataTableDemoCode,
    importCode:
      'import { DataTable, DataTableHeader, DataTableBody, type DataTableColumn } from "@accessly-ui/react";',
    stories: dataTableStories,
  },
  accordion: {
    Demo: AccordionDemo,
    code: accordionDemoCode,
    importCode:
      'import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@accessly-ui/react";',
    stories: accordionStories,
  },
  carousel: {
    Demo: CarouselDemo,
    code: carouselDemoCode,
    importCode:
      'import { Carousel, CarouselViewport, CarouselTrack, CarouselSlide, CarouselPrevButton, CarouselNextButton, CarouselDots, CarouselPlayPauseButton } from "@accessly-ui/react";',
    stories: carouselStories,
  },
};
