<script>
    /**
     * @typedef {Object} listItem
     * @property {string | undefined} list_title
     * @property {HTMLElement | undefined} list_left
     * @property { HTMLElement | undefined} list_right
     */

    /** @type {{ text_color?: string, subtitle?: string, text?: HTMLElement, list?: listItem[], title: any }} */
    let { text_color, subtitle, text, list, title } = $props();
</script>

<div class="text-box">
    <div class="text-box" style="color: {text_color}">
        {#if subtitle}
            <div class="text-box__subtitle inview--not" data-module="inview">
                {subtitle}
            </div>
        {/if}

        {#if title}
            <div class="text-box__title inview--not" data-module="inview">
                {@html title}
            </div>
        {/if}

        {#if text}
            <div class="text-box__text inview--not" data-module="inview">
                {text}
            </div>
        {/if}

        {#if list?.length}
            {#each list as item}
                <div class="text-box__list list">
                    {#if item.list_title}
                        <p class="list__title inview--not" data-module="inview">
                            {item.list_title}
                        </p>
                    {/if}

                    {#if item.list_left}
                        <div
                            class="list__items inview--not {item.list_right
                                ? 'list__items--two'
                                : ''}"
                            data-module="inview"
                        >
                            {item.list_left}

                            {#if item.list_right}
                                {item.list_right}
                            {/if}
                        </div>
                    {/if}
                </div>
            {/each}
        {/if}
        <!--
          <?php if (have_rows('files')):
            while (have_rows('files')) : the_row();
              $counter = 1;
              $file = get_sub_field('file');
              $url = $file['url'];
              if ($url) :
                ?>
                  <div class="button-container inview--not <?php echo $counter; ?> " data-module="inview">
                      <a class="button button--file" href="<?php echo $url; ?>" target="_blank"
                         style="background-color: <?php the_sub_field('color'); ?>"><?php the_sub_field('name') ?>
                          <span class="button__icons">
                          <i class="fas button__arrow fa-long-arrow-alt-down"></i>
                          <i class="far button__bar fa-window-minimize"></i>
                      </span>
                      </a>
                  </div>
              <?php
              endif;
              $counter++;
            endwhile;
          endif;
          ?>

          <?php
          $link = get_sub_field('link');

          if ($link):
            $link_url = $link['url'];
            $link_title = $link['title'];
            $link_target = $link['target'] ? $link['target'] : '_self';
            ?>

              <div class="text-box__link inview--not" data-module="inview">
                  <a href="<?php echo $link_url; ?>" class="link read-more" target="<?php echo $link_target; ?>">
                    <?php echo $link_title; ?>
                  </a>
              </div>
          <?php endif; ?>
           -->
    </div>
</div>

<style lang="scss">
    $serif: "Raleway", sans-serif;
    $sans-serif: "Montserrat", sans-serif;
    $lg: 992px;

    .text-box {
        color: currentColor;
        padding: 90px 35px;

        &__title {
            font-family: $sans-serif;
            font-size: 2.6rem;
            font-weight: 500;
            line-height: 34px;
            margin-top: 35px;
            margin-bottom: 35px;

            > * {
                font-family: $sans-serif;
                font-size: 2.6rem;
                font-weight: 500;
            }

            > h1 {
                font-size: 3rem;
            }
        }

        &__subtitle {
            font-family: $serif;
            font-size: 1.2rem;
            line-height: 17.5px;
            font-weight: 700;
            text-transform: uppercase;
        }

        &__text {
            color: currentColor;
            font-family: $sans-serif;
            font-size: 1.6rem;
            font-weight: 500;
            letter-spacing: 1px;
            line-height: 26px;

            > p {
                color: currentColor;
                font-family: $serif;
                font-size: 1.6rem;
                font-weight: 500;
                letter-spacing: 1px;
                line-height: 26px;
            }

            em,
            strong,
            li {
                color: currentColor;
                font-family: $serif;
                font-size: 1.6rem;
            }

            em {
                display: inline-block;
                margin: 20px 0 10px;
            }

            strong {
                font-weight: bold;
            }
        }

        &__list {
            margin-top: 20px;
        }

        &__link {
            color: currentColor;
            font-family: $serif;
            margin-top: 35px;
        }
    }

    @media screen and (min-width: $lg) {
        .text-box {
            padding: 90px 85px;
        }
    }
</style>
