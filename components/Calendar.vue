<template>
	<div>
		<div class="alert alert-dark">
			<div v-if="sessions.future.length">
				<h3 class="alert-head">
					Future Sessions
				</h3>
				<div class="alert alert-warning d-flex justify-content-between">
					<h5 class="alert-link">
						Topic
					</h5>
					<h5 class="alert-link">
						Date
					</h5>
				</div>
				<div :class="getClass(session)" v-for="session in sessions.future">
					<div class="d-flex justify-content-between" v-if="session">
						<span>
							{{ session.topic }}
						</span>
						<span>
							{{ session.date }}
						</span>
					</div>
				</div>
			</div>
			<div v-if="sessions.passed.length">
				<h3 class="alert-head">
					Passed Sessions
				</h3>
				<div class="alert alert-warning d-flex justify-content-between">
					<h5 class="alert-link">
						Topic
					</h5>
					<h5 class="alert-link">
						Date
					</h5>
				</div>
				<div :class="getClass(session)" v-for="session in sessions.passed">
					<div class="d-flex justify-content-between" v-if="session">
						<span>
							{{ session.topic }}
						</span>
						<span>
							{{ session.date }}
						</span>
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-center" v-if="!sessions.future.length & !sessions.passed.length">
				<h2 class="alert-link">
					No session has been scheduled yet !
				</h2>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			classes:[
				'alert alert-primary',
				'alert alert-success',
				'alert alert-danger'
			],
			sessions:{
				'passed':[],
				'future':[]
			}
		}
	},
	methods:{
		getClass(session){
			if (session.passed) {
				return this.classes[2]
			}else{
				return this.classes[1]
			}
		}
	},
	mounted() {
	    this.$nextTick(()=>{
		  	this.$axios.$get('https://teacher-assistant.github.io/winter2022-AdvanceProgramming/Sessions.json')
	        .then(response=>{
	        	response.forEach((session)=>{
	        		if (session.passed)
	        			this.sessions.passed.push(session)
	        		else
	        			this.sessions.future.push(session)
	        	});
	        })
	    })
  	}
}
</script>