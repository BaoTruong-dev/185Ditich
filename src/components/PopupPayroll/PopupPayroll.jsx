import React from 'react';
import './popupPayroll.scss';
import shape_svg from '../../assets/img/Shape.svg';
export default function PopupPayroll() {
    return (
        <div className='popupdetails-salary'>
            <h3>THÔNG TIN LƯƠNG VÀ THANH TOÁN</h3>
            <div className="popupdetails-salary__wrapper">
                <div className="left">
                    <p className="title">Thông tin lương</p>
                    <div className="box">
                        <div className="title">Tổng lương thực tháng 7</div>
                        <div className="money">
                            <div className="number">14.100.000 VND</div>
                            <div className="percent">
                                <p>0%</p>
                                <img src={shape_svg} alt="shape"></img>
                            </div>
                        </div>
                        <p className='compare'>
                            So với (14.100.000 VND tháng trước)
                        </p>
                    </div>
                </div>
                <div className="right">
                    <p className="title">Thanh toán</p>
                    <div className="box">
                        <div className="title">Tổng chi lương tháng 7</div>
                        <div className="money">
                            <div className="number">217.050.632 VND</div>
                            <div className="percent">
                                <p>+2.5%</p>
                                <img src={shape_svg} alt="shape"></img>
                            </div>
                        </div>
                        <p className='compare'>
                            So với (195.294.504 VND tháng 6)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
