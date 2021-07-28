import React, {useEffect, useState} from 'react';
import {
  Appearance,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  ICAlbumPrimary,
  ICCameraPrimary,
  ICCameraWhite,
  ICRemoveRed,
} from '../../assets';
import {texts} from '../../configs/styles/texts';
import {colors, display} from '../../constants';
import ButtonOutline from '../ButtonOutline';
import Gap from '../Gap';
import {
  actions,
  getContentCSS,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import {useSelector} from 'react-redux';
import {XMath} from '@wxik/core';

const imageList = [
  'https://img.lesmao.vip/k/h256/R/MeiTu/1293.jpg',
  'https://pbs.twimg.com/profile_images/1242293847918391296/6uUsvfJZ.png',
  'https://img.lesmao.vip/k/h256/R/MeiTu/1297.jpg',
  'https://img.lesmao.vip/k/h256/R/MeiTu/1292.jpg',
];

const ModalEditor = ({
  isVisible,
  onPressClose,
  onSave,
  value,
  title,
  navigation,
}) => {
  const [theme, settheme] = useState(Appearance.getColorScheme());
  const contentStyle = createContentStyle(theme);
  const [contentStyles, setcontentsStyles] = useState(contentStyle);
  const [emojiVisible, setemojiVisible] = useState(false);
  const [disabled, setdisabled] = useState(false);

  const richText = React.createRef();
  const linkModal = React.createRef();
  const scrollRef = React.createRef();

  useEffect(() => {
    function themeChange({colorScheme}) {
      const themess = colorScheme;
      const contentStyless = createContentStyle(themess);
      setcontentsStyles(contentStyless);
      settheme(themess);
    }
    Appearance.addChangeListener(themeChange);
    Keyboard.addListener('keyboardDidShow', onKeyShow);
    Keyboard.addListener('keyboardDidHide', onKeyHide);
    return () => {
      Appearance.removeChangeListener(themeChange);
      Keyboard.dismiss('keyboardDidShow', onKeyShow);
      Keyboard.dismiss('keyboardDidHide', onKeyHide);
    };
  }, []);

  const onKeyHide = () => {};

  const onKeyShow = () => {
    TextInput.State.currentlyFocusedInput() && setemojiVisible(false);
  };

  function editorInitializedCallback() {
    richText.current?.registerToolbar(function (items) {
      // console.log('Toolbar click, selected items (insert end callback):', items);
    });
  }

  async function save() {
    // Get the data here and call the interface to save the data
    let html = await richText.current?.getContentHtml();
    onPressClose();
    onSave(html.replace(/<[^>]+>/g, ''));
    // console.log(html);
    // navigation.push('preview', {html, css: getContentCSS()});
  }

  /**
   * editor change data
   * @param {string} html
   */
  function handleChange(html) {
    const richHTMLs = html;
    // console.log('onChangeText', richHTMLs);
  }

  /**
   * editor height change
   * @param {number} height
   */
  function handleHeightChange(height) {
    // console.log('editor height change:', height);
  }

  function insertEmoji(emoji) {
    richText.current?.insertText(emoji);
    richText.current?.blurContentEditor();
  }

  function handleEmoji() {
    Keyboard.dismiss();
    richText.current?.blurContentEditor();
    setemojiVisible(!emojiVisible);
  }

  function insertVideo() {
    richText.current?.insertVideo(
      'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4',
      'width: 50%;',
    );
  }

  const fontSize = () => {
    // 1=  10px, 2 = 13px, 3 = 16px, 4 = 18px, 5 = 24px, 6 = 32px, 7 = 48px;
    const size = [1, 2, 3, 4, 5, 6, 7];
    richText.current?.setFontSize(size[XMath.random(size.length - 1)]);
  };

  const foreColor = () => {
    richText.current?.setForeColor('blue');
  };

  const hiliteColor = () => {
    richText.current?.setHiliteColor('red');
  };

  function insertHTML() {
    // richText.current?.insertHTML(
    //     `<span onclick="alert(2)" style="color: blue; padding:0 10px;" contenteditable="false">HTML</span>`,
    // );
    richText.current?.insertHTML(
      `<div style="padding:10px 0;" contentEditable="false">
              <iframe  width="100%" height="220"  src="https://www.youtube.com/embed/6FrNXgXlCGA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>`,
    );
  }

  function onPressAddImage() {
    // insert URL
    richText.current?.insertImage(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
      'background: gray;',
    );
    // insert base64
    // richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  }

  function onInsertLink() {
    // richText.current?.insertLink('Google', 'http://google.com');
    linkModal.current?.setModalVisible(true);
  }

  function onLinkDone({titled, url}) {
    richText.current?.insertLink(titled, url);
  }

  function onHome() {
    navigation.push('index');
  }

  function createContentStyle(themed) {
    // Can be selected for more situations (cssText or contentCSSText).
    const contentStyled = {
      backgroundColor: '#2e3847',
      color: '#fff',
      caretColor: 'red', // initial valid// initial valid
      placeholderColor: 'gray',
      // cssText: '#editor {background-color: #f3f3f3}', // initial valid
      contentCSSText: 'font-size: 16px; min-height: 200px;', // initial valid
    };
    if (themed === 'light') {
      contentStyled.backgroundColor = '#fff';
      contentStyled.color = '#000033';
      contentStyled.placeholderColor = '#a9a9a9';
    }
    return contentStyled;
  }

  function onTheme() {
    const themes = theme === 'light' ? 'dark' : 'light';
    let contentStyless = createContentStyle(themes);
    settheme(themes);
    setcontentsStyles(contentStyless);
  }

  function onDisabled() {
    setdisabled(!disabled);
  }

  const handlePaste = data => {
    // console.log('Paste:', data);
  };

  const handleKeyUp = data => {
    // console.log('KeyUp:', data);
  };

  const handleKeyDown = data => {
    // console.log('KeyDown:', data);
  };

  const handleMessage = ({type, id, data}) => {
    let index = 0;
    switch (type) {
      case 'ImgClick':
        richText.current?.commandDOM(
          `$('#${id}').src="${imageList[XMath.random(imageList.length - 1)]}"`,
        );
        break;
      case 'TitleClick':
        const color = ['red', 'blue', 'gray', 'yellow', 'coral'];

        // command: $ = document.querySelector
        richText.current?.commandDOM(
          `$('#${id}').style.color='${color[XMath.random(color.length - 1)]}'`,
        );
        break;
      case 'SwitchImage':
        break;
    }
    console.log('onMessage', type, id, data);
  };

  const handleCursorPosition = scrollY => {
    // Positioning scroll bar
    scrollRef.current.scrollTo({y: scrollY - 30, animated: true});
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onPressClose}
      onBackButtonPress={onPressClose}
      useNativeDriver={true}
      animationIn="slideInLeft"
      animationOut="slideOutRight">
      <View style={styles.conatinerModal}>
        <View style={styles.header}>
          <TouchableOpacity onPress={save}>
            <Text allowFontScaling={false} style={texts.whiteBold}>
              Save
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressClose}>
            <Text allowFontScaling={false} style={texts.redBold}>
              Batal
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <RichToolbar
            style={[styles.richBar, styles.richBarDark]}
            flatContainerStyle={styles.flatStyle}
            editor={richText}
            disabled={disabled}
            selectedIconTint={'#2095F2'}
            disabledIconTint={'#bfbfbf'}
            onPressAddImage={onPressAddImage}
            onInsertLink={onInsertLink}
          />
          <ScrollView>
            <RichEditor
              initialFocus={true}
              disabled={disabled}
              editorStyle={contentStyles} // default light style
              ref={richText}
              style={styles.rich}
              useContainer={true}
              initialHeight={400}
              // containerStyle={{borderRadius: 24}}
              placeholder={'please input content'}
              initialContentHTML={''}
              editorInitializedCallback={editorInitializedCallback}
              onChange={handleChange}
              onHeightChange={handleHeightChange}
              onPaste={handlePaste}
              onKeyUp={handleKeyUp}
              onKeyDown={handleKeyDown}
              onMessage={handleMessage}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
              onCursorPosition={handleCursorPosition}
              pasteAsPlainText={true}
            />
          </ScrollView>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <RichToolbar
            style={[styles.richBar, styles.richBarDark]}
            flatContainerStyle={styles.flatStyle}
            editor={richText}
            disabled={disabled}
            iconTint={contentStyles.color}
            selectedIconTint={'#2095F2'}
            disabledIconTint={'#bfbfbf'}
            onPressAddImage={onPressAddImage}
            onInsertLink={onInsertLink}
            iconSize={24}
            iconGap={10}
            actions={[
              actions.undo,
              actions.redo,
              actions.insertVideo,
              actions.insertImage,
              actions.setStrikethrough,
              actions.checkboxList,
              actions.insertOrderedList,
              actions.blockquote,
              actions.alignLeft,
              actions.alignCenter,
              actions.alignRight,
              actions.code,
              actions.line,

              actions.foreColor,
              actions.hiliteColor,
              actions.heading1,
              actions.heading4,
              'insertEmoji',
              'insertHTML',
              'fontSize',
            ]} // default defaultActions
            iconMap={{
              [actions.foreColor]: ({tintColor}) => (
                <Text style={[styles.tib, texts.blue]}>FC</Text>
              ),
              [actions.hiliteColor]: ({tintColor}) => (
                <Text style={[styles.tib, styles.bc]}>BC</Text>
              ),
              [actions.heading1]: ({tintColor}) => (
                <Text style={[styles.tib, {color: tintColor}]}>H1</Text>
              ),
              [actions.heading4]: ({tintColor}) => (
                <Text style={[styles.tib, {color: tintColor}]}>H3</Text>
              ),
            }}
            insertEmoji={handleEmoji}
            insertHTML={insertHTML}
            insertVideo={insertVideo}
            fontSize={fontSize}
            foreColor={foreColor}
            hiliteColor={hiliteColor}
          />
          {/* {emojiVisible && <EmojiView onSelect={insertEmoji} />} */}
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default ModalEditor;

const styles = StyleSheet.create({
  conatinerModal: {
    // flex: 1,
    height: display.hp(60),
    flex: 0.8,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: display.hp(6),
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: display.wp(3.9),
    color: colors.white,
  },
  content: {
    flex: 1,
  },
  contentImage: {
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  rich: {
    minHeight: 200,
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
  },
  topVi: {
    backgroundColor: colors.white,
  },
  richBar: {
    borderColor: '#efefef',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  richBarDark: {
    backgroundColor: colors.silver,
    borderColor: '#696969',
  },
  scroll: {
    backgroundColor: '#ffffff',
  },
  scrollDark: {
    backgroundColor: '#2e3847',
  },
  darkBack: {
    backgroundColor: colors.white,
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e8e8e8',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
  },
  tib: {
    textAlign: 'center',
    color: '#515156',
  },
  flatStyle: {
    paddingHorizontal: 12,
  },
  bc: tintColor => ({color: tintColor, backgroundColor: 'red'}),
});
