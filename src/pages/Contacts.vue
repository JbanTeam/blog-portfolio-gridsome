<template>
  <Layout>
    <main>
      <h1 class="title text-center mb-3">{{this.$lang.contacts[curLang].title}}</h1>

      <p v-if="curLang === 'en'" class="desc text-center">Here You can write to me, or use
        <a class="text-decoration-none" target="_blank" rel="noopener" href="https://t.me/Mad_Advocado">
          telegram
        </a> or
        <a class="text-decoration-none" target="_blank" rel="noopener" href="https://vk.com">vKontakte</a>
        for it.
      </p>
      <p v-if="curLang === 'rus'" class="desc text-center">Здесь Вы можете отправить мне сообщение, или использовать для этого
        <a class="text-decoration-none" target="_blank" rel="noopener" href="https://t.me/Mad_Advocado">
          telegram
        </a> или
        <a class="text-decoration-none" target="_blank" rel="noopener" href="https://vk.com">vKontakte</a>.
      </p>

      <div class="form-wrapper">
        <form>
          <div class="form-group" v-for="name in Object.keys(formData)" :key="name">
            <label :for="name">{{formData[name].label[curLang]}}</label>
            <input v-if="name !== 'textarea'" type="text" class="form-control" :id="name" :value="formData[name].value" @input="change(name, $event)">
            <textarea v-else class="form-control" :id="name" rows="6" :value="formData[name].value" @input="change(name, $event)"></textarea>
            <div v-if="formData[name].valid !== null" :class="formData[name].valid ? 'valid-feedback' : 'invalid-feedback'">
              {{formData[name].valid ? 'Looks good!' : formData[name].errorText}}
            </div>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="check" v-model="formChecked">
            <label class="form-check-label" for="check">{{this.$lang.contacts[curLang].privacyText}} <a href="#">{{this.$lang.contacts[curLang].privacyLink}}</a>.</label>
          </div>
          <button type="submit" class="btn contacts-btn" :class="btnDisabled ? 'disabled' : ''" :disabled="btnDisabled">{{this.$lang.contacts[curLang].btn}}</button>
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
  mounted() {
    this.$eventBus.$on("changeLang", lang => (this.curLang = lang));
    let lang = localStorage.getItem("mylang");
    if (lang) {
      this.curLang = lang;
    }
  },
  data() {
    return {
      curLang: "en",
      formChecked: false,
      formData: {
        name: {
          value: "",
          label: {
            en: "Name",
            rus: "Имя"
          },
          validator: val => /^[aA-zZ]{2,}$/.test(val),
          errorText: "Latin symbols, from 2",
          valid: null
        },
        email: {
          value: "",
          label: {
            en: "Email",
            rus: "Почта"
          },
          validator: val => /^.+@.+$/.test(val),
          errorText: "Email must contain '@' symbol",
          valid: null
        },
        textarea: {
          value: "",
          label: {
            en: "Question or proposal",
            rus: "Вопрос или предложение"
          },
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