<template>
	<form @submit.prevent="submitForm" class="grid gap-4 p-12 text-white sm:grid-cols-2 bg-primary">
		<div class="text-2xl font-semibold col-span-full">Contact Form</div>
		<input type="hidden" name="form-name" value="Contact Form" />
		<p hidden>
			<label> Don’t fill this out: <input name="bot-field" /> </label>
		</p>
		<div>
			<label for="name">Name *</label>
			<input id="name" type="text" name="name" required v-model="formData.name" />
		</div>
		<div>
			<label for="email">Email *</label>
			<input id="email" type="email" name="email" required v-model="formData.email" />
		</div>
		<div>
			<label for="phone">Phone</label>
			<input id="phone" type="tel" name="phone" v-model="formData.phone" />
		</div>
		<div>
			<label for="subject">Subject *</label>
			<input id="subject" type="text" name="subject" required v-model="formData.subject" />
		</div>

		<div class="mb-4 col-span-full">
			<label for="message">Message *</label>
			<textarea id="message" required class="block w-full" name="message" v-model="formData.message" rows="5"></textarea>
		</div>

		<button type="submit" class="inline-block p-2 cursor-pointer bg-primary-dark hover:bg-white hover:text-primary-dark">
			Submit
		</button>
		<span class="py-2">{{ status }}</span>
	</form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      },
      status: '',
    };
  },
  methods: {
    submitForm() {
      fetch("/.netlify/functions/submitForm", {
        method: "POST",
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (response.ok) {
            setTimeout(() => {
              this.$router.push('/success')
            }, 600)
          } else {
            if (response.headers.get("content-type")?.includes("application/json")) {
              return response.json()
                .then((errorData) => {
                  console.error("Error:", errorData);
                  this.status = "Error: " + errorData.message;
                })
                .catch((jsonError) => {
                  this.status = "JSON parsing error:", jsonError;
                });
            } else {
              this.status = "Non-JSON error response";
            }
          }
        })
        .catch((fetchError) => {
          console.error("Fetch error:", fetchError);
        });
    },
  },
};
</script>

<style scoped lang="postcss">
input,
textarea {
	@apply text-black w-full p-2;
}
</style>
