export interface OrderDetailDto {
  idSP: number;
  quantity: number;
}

export interface OrderRequestDto {
  items: OrderDetailDto[];
}

export interface OrderResponseDto {
  idDH: number;
  idUser: number;
  orderDate: string;
  totalPrice: number;
  status: string;
  items: any[];
}

export enum OrderStatus {
  ChoXacNhan = 0,
  DaXacNhan = 1,
  DaVanChuyen = 2,
  DaNhanHang = 3,
  DaHuy = 4
}
