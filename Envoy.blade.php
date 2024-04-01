@servers(['sandbox' => 'deployer@172.16.17.3','prod' => 'deployer@172.16.13.35'])

@setup
$repository = 'git@git.click.uz:click_help/front-end-help.git';
$releases_dir = '/var/www/help_front/releases';
$app_dir = '/var/www/help_front';
$release = date('YmdHis');
$new_release_dir = $releases_dir .'/'. $release;
@endsetup

@story('deploy', ['on' => [$env]])
clone_repository
run_composer
go_live
@endstory

@task('clone_repository')
echo 'Cloning repository'
[ -d {{ $releases_dir }} ] || mkdir {{ $releases_dir }}
git clone --depth 1 {{ $repository }} {{ $new_release_dir }} -b {{ $branch }}
cd {{ $new_release_dir }}
git reset --hard {{ $commit }}
@endtask

@task('run_composer')
echo "Starting deployment ({{ $release }})"
cd {{ $new_release_dir }}
yarn install --frozen-lockfile
yarn build
@endtask

@task('go_live')
echo 'Linking current release'
ln -nfs {{ $new_release_dir }} {{ $app_dir }}/current
supervisorctl restart help:*
@endtask
