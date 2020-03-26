import React from "react";

const News = () => {
	return (
		<div className="news-page">
			<div>
				<h4>
					News & Stories <span>|</span>
				</h4>
				<a href="www.tec.com" className="view">
					View All
				</a>
			</div>
			<div
				id="carousel-example-multi"
				className="carousel slide carousel-multi-item v-2"
				data-ride="carousel">
				<div className="controls-top">
					<a
						className="btn-floating"
						href="#carousel-example-multi"
						data-slide="prev">
						<i className="fas fa-chevron-left"></i>
					</a>
					<a
						className="btn-floating"
						href="#carousel-example-multi"
						data-slide="next">
						<i className="fas fa-chevron-right"></i>
					</a>
				</div>

				<ol className="carousel-indicators">
					<li
						data-target="#carousel-example-multi"
						data-slide-to="0"
						className="active"></li>
					<li data-target="#carousel-example-multi" data-slide-to="1"></li>
					<li data-target="#carousel-example-multi" data-slide-to="2"></li>
					<li data-target="#carousel-example-multi" data-slide-to="3"></li>
					<li data-target="#carousel-example-multi" data-slide-to="4"></li>
					<li data-target="#carousel-example-multi" data-slide-to="5"></li>
				</ol>

				<div className="carousel-inner v-2 " role="listbox">
					<div className="carousel-item active">
						<div className="row">
							<div className=" col-md-4">
								<div className="card mb-2">
									<img
										className="card-img-top"
										src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg"
										alt="Card  cap"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="carousel-item">
						<div className="row">
						<div className=" col-md-4">
							<div className="card mb-2">
								<img
									className="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (31).jpg"
									alt="Card  cap"
								/>
							</div>
						</div>
						</div>
					</div>
					{/* <div className="carousel-item">
						<div className=" col-md-4">
							<div className="card mb-2">
								<img
									className="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (34).jpg"
									alt="Card  cap"
								/>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className=" col-md-4">
							<div className="card mb-2">
								<img
									className="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (34).jpg"
									alt="Card  cap"
								/>
							</div>
						</div>
					</div> */}
				</div>

				{/* <div className="carousel-item">
						<div className=" col-md-4">
							<div className="card mb-2">
								<img
									className="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (33).jpg"
									alt="Card  cap"
								/>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="col-12 col-md-4">
							<div className="card mb-2">
								<img
									className="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (14).jpg"
									alt="Card  cap"
								/>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="col-12 col-md-4">
							<div className="card mb-2">
								<img
									className="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (15).jpg"
									alt="Card  cap"
								/>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="col-12 col-md-4">
							<div className="card mb-2">
								<img
									className="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (35).jpg"
									alt="Card  cap"
								/>
							</div>
						</div>
					</div> */}
			</div>
		</div>
	);
};

export default News;
