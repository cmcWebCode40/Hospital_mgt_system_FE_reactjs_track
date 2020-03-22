import React from "react";

const News = () => {
	return (
		<div className="news-page">
			<div>
				<h4>
					News & Stories <span>|</span>
				</h4>
				<a href="#" className="view">
					View All
				</a>
			</div>
			<div
				id="carousel-example-multi"
				class="carousel slide carousel-multi-item v-2"
				data-ride="carousel">
				<div class="controls-top">
					<a
						class="btn-floating"
						href="#carousel-example-multi"
						data-slide="prev">
						<i class="fas fa-chevron-left"></i>
					</a>
					<a
						class="btn-floating"
						href="#carousel-example-multi"
						data-slide="next">
						<i class="fas fa-chevron-right"></i>
					</a>
				</div>

				<ol class="carousel-indicators">
					<li
						data-target="#carousel-example-multi"
						data-slide-to="0"
						class="active"></li>
					<li data-target="#carousel-example-multi" data-slide-to="1"></li>
					<li data-target="#carousel-example-multi" data-slide-to="2"></li>
					<li data-target="#carousel-example-multi" data-slide-to="3"></li>
					<li data-target="#carousel-example-multi" data-slide-to="4"></li>
					<li data-target="#carousel-example-multi" data-slide-to="5"></li>
				</ol>

				<div class="carousel-inner v-2 " role="listbox">
					<div class="carousel-item active">
						<div className="row">
							<div class=" col-md-4">
								<div class="card mb-2">
									<img
										class="card-img-top"
										src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg"
										alt="Card image cap"
									/>
								</div>
							</div>
							<div class=" col-md-4">
								<div class="card mb-2">
									<img
										class="card-img-top"
										src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg"
										alt="Card image cap"
									/>
								</div>
							</div>
							<div class=" col-md-4">
								<div class="card mb-2">
									<img
										class="card-img-top"
										src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg"
										alt="Card image cap"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="carousel-item">
						<div class=" col-md-4">
							<div class="card mb-2">
								<img
									class="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (31).jpg"
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class=" col-md-4">
							<div class="card mb-2">
								<img
									class="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (34).jpg"
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class=" col-md-4">
							<div class="card mb-2">
								<img
									class="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (34).jpg"
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* <div class="carousel-item">
						<div class=" col-md-4">
							<div class="card mb-2">
								<img
									class="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (33).jpg"
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-12 col-md-4">
							<div class="card mb-2">
								<img
									class="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (14).jpg"
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-12 col-md-4">
							<div class="card mb-2">
								<img
									class="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (15).jpg"
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-12 col-md-4">
							<div class="card mb-2">
								<img
									class="card-img-top"
									src="https://mdbootstrap.com/img/Photos/Others/img (35).jpg"
									alt="Card image cap"
								/>
							</div>
						</div>
					</div> */}
			</div>
		</div>
	);
};

export default News;
