import axios from 'axios';


export const layDanhSachPhimAction = () => {
  return dispatch => {
    axios({
      method:'GET',
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom-GP01`,
    }).then(result=>{
      dispatch({
        type: 'LAY_DANH_SACH_PHIM',
        DanhSachPhim: result.data
      })
    }).catch(error => {
      console.log(error.response.data);
      
    })
  }
}

export const layChiTietPhim = (maPhim) => {
  return dispatch => {
    axios({
      method:'GET',
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    }).then(result=>{
      
      dispatch({
        type: 'LAY_CHI_TIET_PHIM',
        chiTietPhim: result.data,
        
      })
    }).catch(error => {
      console.log(error.response.data);
      
    })
  }
}