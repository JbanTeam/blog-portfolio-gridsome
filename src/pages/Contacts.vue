<template>
  <Layout>
    <main>
      <h1 class="title text-center mb-3">Contacts</h1>
      <p class="desc text-center">Here You can write to me, or use
        <a class="text-decoration-none" target="_blank" rel="noopener" href="https://t.me/Mad_Advocado">
          telegram
        </a> or
        <a class="text-decoration-none" target="_blank" rel="noopener" href="https://vk.com">vKontakte</a>
        for it.
      </p>

      <div class="form-wrapper">
        <form>
          <div class="form-group" v-for="name in Object.keys(formData)" :key="formData[name].label">
            <label :for="name">{{formData[name].label}}</label>
            <input v-if="name !== 'textarea'" type="text" class="form-control" :id="name" :value="formData[name].value" @input="change(name, $event)">
            <textarea v-else class="form-control" :id="name" rows="6" :value="formData[name].value" @input="change(name, $event)"></textarea>
            <div v-if="formData[name].valid !== null" :class="formData[name].valid ? 'valid-feedback' : 'invalid-feedback'">
              {{formData[name].valid ? 'Looks good!' : formData[name].errorText}}
            </div>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="check" v-model="formChecked">
            <label class="form-check-label" for="check">I agree with <a href="#">privacy policy</a>.</label>
          </div>
          <button type="submit" class="btn contacts-btn" :class="btnDisabled ? 'disabled' : ''" :disabled="btnDisabled">Send</button>
        </form>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contacts"
  },
  data() {
    return {
      formChecked: false,
      formData: {
        name: {
          value: "",
          label: "Name",
          validator: val => /^[aA-zZ]{2,}$/.test(val),
          errorText: "Latin symbols, from 2",
          valid: null
        },
        email: {
          value: "",
          label: "Email",
          validator: val => /^.+@.+$/.test(val),
          errorText: "Email must contain '@' symbol",
          valid: null
        },
        textarea: {
          value: "",
          label: "Question or proposal",
          validator: val => /^[aA-zZ0-9]{10,}$/.test(val),
          errorText: "Required more then 10 symbols",
          valid: null
        }
      }
    };
  },
  computed: {
    btnDisabled() {
      const fieldsValid = Object.values(this.formData).every(field => {
        return field.valid === true;
      });
      return !fieldsValid || !this.formChecked;
    }
  },
  methods: {
    change(key, e) {
      let field = this.formData[key];
      field.value = e.target.value;
      field.valid = field.validator(field.value);
    }
  }
};
</script>

<style>
.disabled {
  cursor: default;
}
.valid-feedback,
.invalid-feedback {
  display: block;
}
</style>