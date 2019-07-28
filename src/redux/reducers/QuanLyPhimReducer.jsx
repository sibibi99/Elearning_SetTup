const stateDefault = {
  DanhSachPhim: [],
  chiTietPhim: {}
}

const danhSachPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'LAY_DANH_SACH_PHIM': {
      state.DanhSachPhim = action.DanhSachPhim;
      return { ...state }
    }
    case 'LAY_CHI_TIET_PHIM': {
      state.chiTietPhim = action.chiTietPhim;
      return { ...state };
    } default:
  }
  return { ...state }
}

export default danhSachPhimReducer;