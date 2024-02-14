/* eslint-disable @typescript-eslint/no-explicit-any */
import { SxProps } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import React, { ReactNode } from 'react'
import { Control } from 'react-hook-form'
import { ILoginFormProps } from '~/pages/auth/types/LoginForm'
import { IVariant } from './productInterface'

export interface ILayoutProps {
  children: ReactNode
  title?: string
}

export interface IFormInputProps {
  name: string
  label?: string
  control: Control<any>
  error?: string
  type?: 'password' | 'date' | 'checkbox' | 'radio' | 'email' | 'hidden' | 'number'
  sx?: SxProps
  variant: 'outlined' | 'standard'
  multiline?: boolean
  rows?: number
  value?: string
}
export interface IDropdownOption {
  label: string
  value: string
}

export interface IFormInputDropdownProps extends IFormInputProps {
  options: IDropdownOption[]
}

export interface ICheckboxOption {
  label: string
  value: any
}

export interface ICheckboxGroupProps {
  name?: string
  label: string
  options: ICheckboxOption[]
  defaultValues?: any[]
  control?: Control<any, any>
}

export interface ICustomButtonProps {
  variant: 'contained' | 'outlined'
  name: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: React.ReactNode
  sx?: SxProps
  type: 'button' | 'submit' | 'reset'
}

export interface IUserInfoProps {
  id: string
  staffCode: string
  email: string
  password: string
  avatar: string
  role: string
  firstName: string
  lastName: string
}

export interface IAuthProviderProps {
  children: ReactNode
}
export interface IAuthContextProps {
  user: IUserInfoProps | undefined
  idToken: string | null
  login: ({ email, password }: ILoginFormProps) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
}

export interface IMainLayoutProps {
  Component: React.ComponentType
}

export interface ISidebarProps {
  mainContainerRef: React.RefObject<HTMLDivElement>
}

export interface IDataTableProps {
  rows: any[]
  totalRows: number
  columns: GridColDef[]
  page: number
  pageSize: number
  onPageChange: (newPage: number) => void
  onPageSizeChange: (newPageSize: number) => void
  pageSizeOptions?: number[]
}

export interface IStatusCategoriesProps {
  outOfStock?: boolean
  published?: boolean
  draft?: boolean
}

export interface IStatusProductProps {
  active?: boolean
  outOfStock?: boolean
  published?: boolean
  draft?: boolean
}

export interface IStatusOrderProps {
  deleted?: boolean
  delivering?: boolean
  canceled?: boolean
  completed?: boolean
  pending?: boolean
  confirmed?: boolean
  draft?: boolean
}

export interface ICategoriesProps {
  _id?: string
  image?: string
  name: string
  description: string
}

export interface IUploadFileButtonProps {
  onFileChange: (fileUrl: string | null) => void
}

export interface IProductsProps {
  name: string
  description: string
  images: string[]
  brand: string
  variants: IVariant[]
  categories: string[]
}

export interface IAddProductProps {
  name: string
  description: string
  images: string[]
  brand: string
  variants: any
  categories: string[]
}

export interface ColumnProps {
  navigate: (path: string) => void
}