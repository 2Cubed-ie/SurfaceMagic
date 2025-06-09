<template>
  <div
    id="crmWebToEntityForm"
    class="zcwf_lblLeft crmWebToEntityForm"
    style="background-color: white; color: black; max-width: 600px;"
  >
    <form
      id="webform821795000000552003"
      action="https://crm.zoho.eu/crm/WebToLeadForm"
      method="POST"
      accept-charset="UTF-8"
      @submit.prevent="handleSubmit"
    >
      <!-- Hidden inputs -->
      <input
        type="text"
        style="display:none;"
        name="xnQsjsdp"
        value="e45786584eee099719377f48c2ae6c70c067cc99c894a3400c8efd8114c1661f"
      />
      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
      <input
        type="text"
        style="display:none;"
        name="xmIwtLD"
        value="4af35c00d920bb537f6463ab3887fedb5f2b54e50cd971408d63e543e20cf103142d0e5bd2775844dd7ceb287c935696"
      />
      <input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
      <input
        type="text"
        style="display:none;"
        name="returnURL"
        value="https://surfacemagic.ie/"
      />

      <!-- Name Field -->
      <div class="zcwf_row">
        <div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
          <label for="Last_Name">
            Name <span style="color:red">*</span>
          </label>
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="Last_Name"
            aria-required="true"
            aria-label="Last Name"
            name="Last Name"
            maxlength="80"
            v-model="form['Last Name']"
          />
        </div>
      </div>

      <!-- Email Field -->
      <div class="zcwf_row">
        <div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
          <label for="Email">
            Email <span style="color:red">*</span>
          </label>
        </div>
        <div class="zcwf_col_fld">
          <input
            type="email"
            id="Email"
            aria-required="true"
            aria-label="Email"
            name="Email"
            maxlength="100"
            autocomplete="off"
            v-model="form.Email"
          />
        </div>
      </div>

      <!-- Phone Field -->
      <div class="zcwf_row">
        <div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
          <label for="Phone">Phone</label>
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="Phone"
            aria-required="false"
            aria-label="Phone"
            name="Phone"
            maxlength="30"
            v-model="form.Phone"
          />
        </div>
      </div>

      <!-- Subject Field -->
      <div class="zcwf_row">
        <div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
          <label for="LEADCF1">
            Subject <span style="color:red">*</span>
          </label>
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="LEADCF1"
            aria-required="true"
            aria-label="Subject"
            name="LEADCF1"
            maxlength="255"
            v-model="form.LEADCF1"
          />
        </div>
      </div>

      <!-- Message Field -->
      <div class="zcwf_row">
        <div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
          <label for="Description">
            Message <span style="color:red">*</span>
          </label>
        </div>
        <div class="zcwf_col_fld">
          <textarea
            id="Description"
            aria-multiline="true"
            aria-required="true"
            aria-label="Description"
            name="Description"
            v-model="form.Description"
            style="font-family: Arial, sans-serif;"
          ></textarea>
        </div>
      </div>

      <!-- Captcha -->
      <div class="zcwf_row">
        <div
          class="zcwf_col_lab"
          id="reCaptchaField"
          style="font-size:12px; font-family: Arial;"
        >
          Enter the Captcha
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="captchaField821795000000552003"
            aria-labelledby="reCaptchaField"
            maxlength="10"
            name="enterdigest"
            v-model="form.enterdigest"
          />
        </div>
      </div>

      <div class="zcwf_row">
        <div class="zcwf_col_lab"></div>
        <div class="zcwf_col_fld">
          <img
            id="imgid821795000000552003"
            :src="captchaSrc"
            alt="captcha"
          />
          <a href="javascript:;" @click.prevent="reloadCaptcha">Reload</a>
        </div>
      </div>

      <!-- Lead Source -->
      <div class="zcwf_row wfrm_fld_dpNn">
        <div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
          <label for="Lead_Source">Lead Source</label>
        </div>
        <div class="zcwf_col_fld">
          <select
            class="zcwf_col_fld_slt"
            id="Lead_Source"
            name="Lead Source"
            aria-label="Lead Source"
            v-model="form['Lead Source']"
          >
            <option value="-None-">-None-</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Cold Call">Cold Call</option>
            <option value="Employee Referral">Employee Referral</option>
            <option value="External Referral">External Referral</option>
            <option value="Partner">Partner</option>
            <option value="Online Store">Online Store</option>
            <option value="Public Relations">Public Relations</option>
            <option value="Trade Show">Trade Show</option>
            <option value="Sales Email Alias">Sales Email Alias</option>
            <option value="Seminar Partner">Seminar Partner</option>
            <option value="Facebook">Facebook</option>
            <option value="Internal Seminar">Internal Seminar</option>
            <option value="X (Twitter)">X (Twitter)</option>
            <option value="Website" selected>Website</option>
            <option value="Web Research">Web Research</option>
            <option value="Chat">Chat</option>
          </select>
        </div>
      </div>

      <!-- Submit and Reset buttons -->
      <div class="zcwf_row">
        <div class="zcwf_col_lab"></div>
        <div class="zcwf_col_fld">
          <input
            type="submit"
            id="formsubmit"
            role="button"
            class="formsubmit zcwf_button"
            value="Submit"
            aria-label="Submit"
            title="Submit"
            :disabled="isSubmitting"
          />
          <input
            type="reset"
            class="zcwf_button"
            role="button"
            name="reset"
            value="Reset"
            aria-label="Reset"
            title="Reset"
            @click="resetForm"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        "Last Name": "",
        Email: "",
        Phone: "",
        LEADCF1: "",
        Description: "",
        enterdigest: "",
        "Lead Source": "Website",
      },
      isSubmitting: false,
      captchaSrc:
        "https://crm.zoho.eu/crm/CaptchaServlet?formId=4af35c00d920bb537f6463ab3887fedb5f2b54e50cd971408d63e543e20cf103142d0e5bd2775844dd7ceb287c935696&grpid=e45786584eee099719377f48c2ae6c70c067cc99c894a3400c8efd8114c1661f",
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    checkMandatory() {
      const mandatoryFields = ["Last Name", "Email", "Description", "LEADCF1"];
      const fieldLabels = {
        "Last Name": "Name",
        Email: "Email",
        Description: "Message",
        LEADCF1: "Subject",
      };

      for (const field of mandatoryFields) {
        const value = this.form[field];
        if (!value || value.trim() === "") {
          alert(`${fieldLabels[field]} cannot be empty.`);
          return false;
        }
      }
      if (!this.validateEmail(this.form.Email)) {
        alert("Please enter a valid Email.");
        return false;
      }
      return true;
    },
    handleSubmit() {
      if (!this.checkMandatory()) {
        return;
      }
      this.isSubmitting = true;
      // Submit form normally since action points to Zoho
      this.$nextTick(() => {
        this.$el.querySelector("form").submit();
      });
    },
    resetForm() {
      this.form = {
        "Last Name": "",
        Email: "",
        Phone: "",
        LEADCF1: "",
        Description: "",
        enterdigest: "",
        "Lead Source": "Website",
      };
    },
    reloadCaptcha() {
      // Reload captcha by changing src to force reload
      const baseSrc =
        "https://crm.zoho.eu/crm/CaptchaServlet?formId=4af35c00d920bb537f6463ab3887fedb5f2b54e50cd971408d63e543e20cf103142d0e5bd2775844dd7ceb287c935696&grpid=e45786584eee099719377f48c2ae6c70c067cc99c894a3400c8efd8114c1661f";
      this.captchaSrc = baseSrc + "&rnd=" + new Date().getTime();
    },
  },
  mounted() {
    // If you want to load Zoho analytics script, do it here dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src =
      "https://crm.zoho.eu/crm/WebFormAnalyticsServeServlet?rid=e45786584eee099719377f48c2ae6c70c067cc99c894a3400c8efd8114c1661f";
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
#webform821795000000552003 {
    background: #244f8c;
    padding: 25px;
    color: white;
}

#webform821795000000552003 label {
  font-size: 16px;
}

#formsubmit, .zcwf_button {
  background: #000000;
}
.zcwf_row {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.zcwf_col_lab {
  width: 30%;
}
.zcwf_col_fld {
  width: 70%;
}
.zcwf_button {
  margin-right: 10px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
}
</style>
