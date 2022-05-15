<template>
    <div class="alert alert-dark">
    	<h3>
    		Below table is updated <span class="alert-link">a few days after deadlines</span>
    	</h3>
    	<div class="table-responsive">
		<table class="table table-primary table-striped">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Student Number</th>
		      <th scope="col">HW1</th>
		      <th scope="col">HW2</th>
		      <th scope="col">HW3</th>
		      <th scope="col">HW4</th>
		      <th scope="col">HW6</th>
		      <th scope="col">HW7</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(student, index) in students">
		      <th scope="row">{{ index+1 }}</th>
		      <td>{{ student.id }}</td> 
		      <td> {{ student.HW1 }}</td>
		      <td> {{ student.HW2 }}</td>
		      <td> {{ student.HW3 }}</td>
		      <td> {{ student.HW4 }}</td>
		      <td> {{ student.HW6 }}</td>
		      <td> {{ student.HW7 }}</td>
		    </tr>
		  </tbody>
		</table>
    	</div>
    </div>
</template>

<script>
export default {
	data(){
		return{
			students:[]
		}
	},
  	mounted() {
	    this.$nextTick(()=>{
		  	this.$axios.$get('https://teacher-assistant.github.io/winter2022-AdvanceProgramming/HomeWorks.json')
	        .then(response=>this.students=response)
	    })
  	}
}
</script>