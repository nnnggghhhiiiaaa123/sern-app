import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';


class About extends Component {

    
    //bootstrap
    render() {
        
        
        return (
            <div className='section-share section-about'>
               <div className='section-about-header'>
                Dự án này dựa trên khóa học Hỏi dân IT
               </div>
               <div className='section-about-content'>
                <div className='content-left'>
                <iframe width="100%" height="400px" 
                src="https://www.youtube.com/embed/VvvXhNbFWKY?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI" 
                title="#N6 Phân Tích Các Kiến Thức Nhận Được Khóa Học Fullstack | Khóa Học Node.JS và React Cho Beginners" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                </div>
                <div className='content-right'>
                    <p>Em mong muốn ứng tuyển vào vị trí thực tập sinh web developer ở công ty để có thể áp dụng được các kỹ năng đã được học để hoàn thành các công việc được giao giúp hoàn thiện bản thân cũng như mang lại giá trị tích cực cho công ty.</p>
                </div>
               </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
